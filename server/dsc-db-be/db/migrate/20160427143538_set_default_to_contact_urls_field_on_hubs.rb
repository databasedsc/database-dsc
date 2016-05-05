class SetDefaultToContactUrlsFieldOnHubs < ActiveRecord::Migration[5.0]
  def change
    change_column :hubs, :contact_urls, :jsonb, default: '[]'
  end
end
