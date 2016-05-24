class RenameFundingsToFundingRoundsInCompanies < ActiveRecord::Migration
  def change
    rename_column :companies, :fundings, :funding_rounds
  end
end
