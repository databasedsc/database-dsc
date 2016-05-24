class ChangeFundingRoundsDatatypeInCompanies < ActiveRecord::Migration
  def change
    change_column :companies, :funding_rounds, 'jsonb USING CAST(funding_rounds as jsonb)'

    add_index  :companies, :funding_rounds, using: :gin
  end
end
