class SetDefaultToContactUrlsFieldOnHubs < ActiveRecord::Migration
  def change
    change_column :hubs, :contact_urls, :jsonb, default: '[]'
  end
end
