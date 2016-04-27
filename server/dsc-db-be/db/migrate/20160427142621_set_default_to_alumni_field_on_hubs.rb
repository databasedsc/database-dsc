class SetDefaultToAlumniFieldOnHubs < ActiveRecord::Migration[5.0]
  def change
    change_column :hubs, :alumni, :jsonb, default: '[]'
  end
end
