class AddDeletedAtToInvestors < ActiveRecord::Migration
  def change
    add_column :investors, :deleted_at, :datetime
    add_index :investors, :deleted_at
  end
end
