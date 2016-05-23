# == Schema Information
#
# Table name: hubs
#
#  id                   :integer          not null, primary key
#  name                 :string
#  logo                 :string
#  short_description    :text
#  programs             :text
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  hub_type             :text             default([]), is an Array
#  application_deadline :date
#  long_description     :text
#  founded              :string
#  contact              :string
#  contact_detail       :string
#  address              :text
#  contact_urls         :jsonb
#  events               :text             default([]), is an Array
#  alumni               :jsonb
#  deleted_at           :datetime
#

class Hub < ApplicationRecord
  acts_as_paranoid
  include PgSearch

  APPLICATION_DEADLINES_DATE_RANGES = {
    'This Month' => DateTime.now..DateTime.now.end_of_month,
    'Next Month' => DateTime.now.next_month.beginning_of_month..DateTime.now.next_month.end_of_month,
    'Next 3 Months' => DateTime.now.next_month.beginning_of_month..(DateTime.now.next_month.beginning_of_month + 3.months),
    'Over 3 Months' => 3.months.from_now..5.years.from_now
  }

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
      programs: 'C'
    },
    using: {
      tsearch: { any_word: true, prefix: true, dictionary: 'english' }
    }

  pg_search_scope :hub_type,
    against: {
      hub_type: 'A'
    },
    using: {
      tsearch: { any_word: true }
    }

  scope :application_deadline, -> (range_as_text) { where(application_deadline: APPLICATION_DEADLINES_DATE_RANGES[range_as_text]) }
  scope :funding_provided, -> (funding_provided) { where(funding_provided: funding_provided) }
  scope :unclaimed_or_owned_by, -> (user_id) { where "(user_id is null) OR (user_id = #{user_id})" }

  attr_accessor :current_user

  def as_json(options = { })
    super((options || { }).merge({
        :methods => [:claimed_requested_by_current_user]
    }))
  end

  def claimed_requested_by_current_user
    UserEntityClaim.where(
      user_id: current_user.id,
      entity_id: self.id,
      entity_type: UserEntityClaim.entity_types['hub']
    ).count > 0 if current_user
  end
end
