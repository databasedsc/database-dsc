class AddCompaniesInvestedInToInvestors < ActiveRecord::Migration[5.0]
  def change
    add_column :investors, :companies_invested_in, :jsonb, default: '[]'
    add_index  :investors, :companies_invested_in, using: :gin
  end
end
