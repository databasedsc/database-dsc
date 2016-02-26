# == Schema Information
#
# Table name: companies
#
#  id                    :integer          not null, primary key
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  name                  :string
#  logo                  :string
#  short_description     :text
#  headquarters          :string
#  formerly_known_as     :string
#  founders              :text
#  categories            :text
#  investors             :text
#  office_locations      :text
#  incubator             :string
#  employees             :integer
#  funding_stage         :string
#  funding_amount        :integer
#  product_stage         :string
#  geo_markets           :string
#  business_model        :string
#  company_stage         :string
#  operational_status    :string
#  funding_rounds        :jsonb
#  looking_for           :text
#  selling               :boolean
#  government_assistance :string
#  contact               :text
#  long_description      :text
#  founded               :string
#  acquisitions          :text
#

class Company < ApplicationRecord
  include PgSearch

  using Utils

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
      tsearch: { any_word: true, prefix: true, dictionary: "english" }
    }

  pg_search_scope :geographical_markets,
    against: {
      geo_markets: 'A'
    },
    using: {
      tsearch: { any_word: true }
    }


  scope :funding_stage, -> (funding_stage) { where funding_stage: funding_stage }
  scope :product_stage, -> (product_stage) { where product_stage: product_stage }
  scope :company_stage, -> (company_stage) { where company_stage: company_stage }
  scope :business_model, -> (business_model) { where business_model: business_model }
  scope :operational_status, -> (operational_status) { where operational_status: operational_status }
  scope :greater_than, -> (entity, limit) { where "#{entity} > #{limit}" }
  scope :range_scope, -> (entity, range) { where("#{entity}" => range) }

  def self.select_numeric_scope(entity, range_as_string)
    if range_as_string == '>500' || range_as_string == '>100m'
      limit = range_as_string.parse_units.gsub('>', '').to_i
      self.greater_than(entity, limit)
    else
      lower, upper = range_as_string.parse_units.split('-').map(&:to_i)
      self.range_scope(entity, lower..upper)
    end
  end
end
