class AddTagsToHubs < ActiveRecord::Migration[5.0]
  def change
    add_column :hubs, :tags, :string, array: true, default: []
  end
end
