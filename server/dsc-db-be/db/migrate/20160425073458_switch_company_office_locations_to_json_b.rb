class SwitchCompanyOfficeLocationsToJsonB < ActiveRecord::Migration[5.0]
  def change
    remove_column :companies, :office_locations
    add_column :companies, :office_locations, :jsonb, default: '{}'
  end
end
