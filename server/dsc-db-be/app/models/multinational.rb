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
