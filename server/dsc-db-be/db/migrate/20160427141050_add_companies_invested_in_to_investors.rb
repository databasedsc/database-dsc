class AddCompaniesInvestedInToInvestors < ActiveRecord::Migration
  def change
    add_column :investors, :companies_invested_in, :jsonb, default: '[]'
    add_index  :investors, :companies_invested_in, using: :gin
  end
end
