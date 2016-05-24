class AddDeletedAtToHubs < ActiveRecord::Migration
  def change
    add_column :hubs, :deleted_at, :datetime
    add_index :hubs, :deleted_at
  end
end
