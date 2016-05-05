require 'csv'

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.to_csv(options = {})
    CSV.generate do |csv|
      csv << column_names
      all.each do |product|
        csv << product.attributes.values_at(*column_names)
      end
    end
  end
end
