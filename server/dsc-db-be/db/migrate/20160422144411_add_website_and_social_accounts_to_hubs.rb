class AddWebsiteAndSocialAccountsToHubs < ActiveRecord::Migration
  def change
    add_column :hubs, :website, :string
    add_column :hubs, :video_url, :text
    add_column :hubs, :social_accounts, :jsonb

    add_index  :hubs, :social_accounts, using: :gin
  end
end
