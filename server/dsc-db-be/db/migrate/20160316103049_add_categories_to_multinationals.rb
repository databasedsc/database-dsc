class AddCategoriesToMultinationals < ActiveRecord::Migration[5.0]
  def change
    add_column :multinationals, :categories, :string, array: true, default: []
  end
end
