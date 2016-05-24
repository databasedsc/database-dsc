class SwitchColumnTypeOfOfficeLocationsOnInvestors < ActiveRecord::Migration
  def change
    remove_column :investors, :office_locations
    add_column :investors, :office_locations, :jsonb, default: '{}'
  end
end
