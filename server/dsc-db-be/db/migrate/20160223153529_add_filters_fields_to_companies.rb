class AddFiltersFieldsToCompanies < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :employees, :integer
    add_column :companies, :funding_stage, :string
    add_column :companies, :funding_amount, :integer
    add_column :companies, :product_stage, :string
    add_column :companies, :geo_markets, :string
    add_column :companies, :business_model, :string
    add_column :companies, :company_stage, :string
    add_column :companies, :operational_status, :string
  end
end
