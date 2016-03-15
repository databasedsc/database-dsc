class AddDeletedAtToHubs < ActiveRecord::Migration[5.0]
  def change
    add_column :hubs, :deleted_at, :datetime
    add_index :hubs, :deleted_at
  end
end
