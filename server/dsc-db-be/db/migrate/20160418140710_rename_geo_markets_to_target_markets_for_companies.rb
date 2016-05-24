class RenameGeoMarketsToTargetMarketsForCompanies < ActiveRecord::Migration
  def change
    rename_column :companies, :geo_markets, :target_markets
  end
end
