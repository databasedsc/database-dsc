# == Schema Information
#
# Table name: hubs
#
#  id                :integer          not null, primary key
#  name              :string
#  logo              :string
#  short_description :text
#  programs          :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Hub < ApplicationRecord
  include PgSearch

  pg_search_scope :search,
    against: {
      name: 'A',
      short_description: 'B',
      programs: 'C'
    },
    using: {
      tsearch: { any_word: true, prefix: true, dictionary: 'english' }
    }
end
