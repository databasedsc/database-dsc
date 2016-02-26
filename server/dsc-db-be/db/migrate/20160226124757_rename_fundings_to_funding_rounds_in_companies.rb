class RenameFundingsToFundingRoundsInCompanies < ActiveRecord::Migration[5.0]
  def change
    rename_column :companies, :fundings, :funding_rounds
  end
end
