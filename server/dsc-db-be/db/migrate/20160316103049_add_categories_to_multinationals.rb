class AddCategoriesToMultinationals < ActiveRecord::Migration
  def change
    add_column :multinationals, :categories, :string, array: true, default: []
  end
end
