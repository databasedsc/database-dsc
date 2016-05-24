class AddHubTypeAndApplicationDeadlineToHubs < ActiveRecord::Migration
  def change
    add_column :hubs, :hub_type, :text, array: true, default: []
    add_column :hubs, :application_deadline, :date
  end
end
