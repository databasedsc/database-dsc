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
#

class Hub < ApplicationRecord
  include PgSearch

  APPLICATION_DEADLINES_DATE_RANGES = {
    'This Month' => DateTime.now...DateTime.now.end_of_month,
    'Next Month' => DateTime.now...DateTime.now.next_month.end_of_month,
    'Next Three Months' => DateTime.now...3.months.from_now,
    'Over Three Months' => DateTime.now...5.years.from_now
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


end
