class AddDeletedAtToMultinationals < ActiveRecord::Migration[5.0]
  def change
    add_column :multinationals, :deleted_at, :datetime
    add_index :multinationals, :deleted_at
  end
end
