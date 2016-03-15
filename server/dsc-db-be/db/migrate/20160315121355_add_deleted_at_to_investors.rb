class AddDeletedAtToInvestors < ActiveRecord::Migration[5.0]
  def change
    add_column :investors, :deleted_at, :datetime
    add_index :investors, :deleted_at
  end
end
