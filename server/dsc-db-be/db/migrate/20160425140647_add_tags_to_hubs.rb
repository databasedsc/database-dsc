class AddTagsToHubs < ActiveRecord::Migration
  def change
    add_column :hubs, :tags, :string, array: true, default: []
  end
end
