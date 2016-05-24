class SwitchCompanyOfficeLocationsToJsonB < ActiveRecord::Migration
  def change
    remove_column :companies, :office_locations
    add_column :companies, :office_locations, :jsonb, default: '{}'
  end
end
