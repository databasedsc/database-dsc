class AddHubTypeAndApplicationDeadlineToHubs < ActiveRecord::Migration[5.0]
  def change
    add_column :hubs, :hub_type, :text, array: true, default: []
    add_column :hubs, :application_deadline, :date
  end
end
