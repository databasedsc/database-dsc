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
#  board_members     :text             default([]), is an Array
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

  def self.select_numeric_scope(column, range_as_string)
    lower, upper = range_as_string.split('-').map(&:to_i)
    return greater_than(column, lower) if upper == 100000000
    range_scope(column, lower..upper)
  end

end
