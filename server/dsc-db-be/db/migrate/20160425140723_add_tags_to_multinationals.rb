class AddTagsToMultinationals < ActiveRecord::Migration[5.0]
  def change
    remove_column :multinationals, :categories, :text
    add_column :multinationals, :tags, :string, array: true, default: []
  end
end
