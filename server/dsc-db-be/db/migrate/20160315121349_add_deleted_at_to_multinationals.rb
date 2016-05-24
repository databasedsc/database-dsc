class AddDeletedAtToMultinationals < ActiveRecord::Migration
  def change
    add_column :multinationals, :deleted_at, :datetime
    add_index :multinationals, :deleted_at
  end
end
