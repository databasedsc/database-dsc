class SetDefaultToAlumniFieldOnHubs < ActiveRecord::Migration
  def change
    change_column :hubs, :alumni, :jsonb, default: '[]'
  end
end
