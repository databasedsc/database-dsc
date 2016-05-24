class AddLatLngToMultinationsAndHubs < ActiveRecord::Migration
  def change
    add_column :multinationals, :lat, :float
    add_column :multinationals, :lng, :float

    add_column :hubs, :lat, :float
    add_column :hubs, :lng, :float
  end
end
