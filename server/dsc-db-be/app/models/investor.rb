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
#

class Investor < ApplicationRecord
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
end
