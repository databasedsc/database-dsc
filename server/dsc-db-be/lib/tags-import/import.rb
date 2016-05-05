require 'csv'
require 'open-uri'

class Import

  def self.start_import

    CSV.foreach(Rails.root.join('lib/tags-import/tags.csv'), headers: true) do |row|
      # get name
      name = row[0]
      # create tag if not already exists
      Tag.where(name: name).first_or_create(name: name)
    end

    puts "#{Tag.count} tags in DB"

  end

end
