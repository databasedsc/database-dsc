class SwitchColumnTypeOfOfficeLocationsOnInvestors < ActiveRecord::Migration[5.0]
  def change
    remove_column :investors, :office_locations
    add_column :investors, :office_locations, :jsonb, default: '{}'
  end
end
