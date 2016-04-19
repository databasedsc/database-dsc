class RenameGeoMarketsToTargetMarketsForCompanies < ActiveRecord::Migration[5.0]
  def change
    rename_column :companies, :geo_markets, :target_markets
  end
end
