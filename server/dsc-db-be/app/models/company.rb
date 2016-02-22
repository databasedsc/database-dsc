# == Schema Information
#
# Table name: companies
#
#  id                :integer          not null, primary key
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  name              :string
#  logo              :string
#  short_description :text
#

class Company < ApplicationRecord
  include PgSearch

  pg_search_scope :search,
    against: {
      name: 'A',
      short_description: 'B',
      headquarters: 'C',
      formerly_known_as: 'A',
      founders: 'D',
      categories: 'D',
      investors: 'D',
      office_locations: 'D',
      incubator: 'D'
    },
    using: {
      tsearch: {prefix: true}
    }
end
