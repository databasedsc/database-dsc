# == Schema Information
#
# Table name: multinationals
#
#  id                :integer          not null, primary key
#  name              :string
#  logo              :string
#  short_description :text
#  headquarters      :string
#  local_office      :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Multinational < ApplicationRecord
  include PgSearch

  pg_search_scope :search,
    against: {
      name: 'A',
      short_description: 'B',
      headquarters: 'C',
      local_office: 'D',
    },
    using: {
      tsearch: { any_word: true, prefix: true, dictionary: 'english' }
    }
end