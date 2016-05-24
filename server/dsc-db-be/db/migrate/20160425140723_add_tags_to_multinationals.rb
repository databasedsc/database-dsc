class AddTagsToMultinationals < ActiveRecord::Migration
  def change
    remove_column :multinationals, :categories, :text
    add_column :multinationals, :tags, :string, array: true, default: []
  end
end
