class AddRemainingFieldsToHubs < ActiveRecord::Migration[5.0]
  def change
    add_column :hubs, :long_description, :text
    add_column :hubs, :founded, :string
    add_column :hubs, :contact, :string
    add_column :hubs, :contact_detail, :string
    add_column :hubs, :address, :text
    add_column :hubs, :contact_urls, :jsonb
    add_column :hubs, :events, :text, array: true, default: []
    add_column :hubs, :alumni, :jsonb

    add_index  :hubs, :contact_urls, using: :gin
    add_index  :hubs, :alumni, using: :gin
  end
end
