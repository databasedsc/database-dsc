# == Schema Information
#
# Table name: investors
#
#  id                :integer          not null, primary key
#  name              :string
#  logo              :string
#  headquarters      :string
#  founders          :jsonb
#  short_description :text
#  local_office      :string
#  tags              :text             default([]), is an Array
#  office_locations  :text             default([]), is an Array
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  funding_types     :text             default([]), is an Array
#  investment_size   :integer
#  funds_raised      :string
#  regions           :text
#  contact           :string
#  contact_email     :string
#  preferred_contact :text
#  co_investors      :text
#  similar_investors :text
#  long_description  :text
#  exits_ipos        :string
#  founded           :string
#  contact_urls      :jsonb
#  deleted_at        :datetime
#

class Investor < ApplicationRecord
  acts_as_paranoid
  include PgSearch

  pg_search_scope :search_by_tag,
    against: {
      tags: 'A',
    },
    using: {
      tsearch: { any_word: true }
    }

  pg_search_scope :search,
    against: {
      name: 'A',
      short_description: 'B',
      headquarters: 'C',
      founders: 'D',
      tags: 'D',
      office_locations: 'D',
      local_office: 'D',
    },
    using: {
      tsearch: { any_word: true, prefix: true, dictionary: 'english' }
    }

  pg_search_scope :funding_types,
    against: {
      funding_types: 'A'
    },
    using: {
      tsearch: { any_word: true }
    }

  scope :greater_than, -> (column, limit) { where "#{column} > #{limit}" }
  scope :range_scope, -> (column, range) { where("#{column}" => range) }
  scope :deal_structure, -> (deal_structure) { where deal_structure: deal_structure }
  scope :unclaimed_or_owned_by, -> (user_id) { where "(user_id is null) OR (user_id = #{user_id})" }

  attr_accessor :current_user

  def self.select_numeric_scope(column, range_as_string)
    lower, upper = range_as_string.split('-').map(&:to_i)
    return greater_than(column, lower) if upper == 100000000
    range_scope(column, lower..upper)
  end

  def as_json(options = { })
    super((options || { }).merge({
        :methods => [:claimed_requested_by_current_user]
    }))
  end

  def claimed_requested_by_current_user
    UserEntityClaim.where(
      user_id: current_user.id,
      entity_id: self.id,
      entity_type: UserEntityClaim.entity_types['investor']
    ).count > 0 if current_user
  end

end
