class AddWebsiteAndSocialAccountsToInvestors < ActiveRecord::Migration[5.0]
  def change
    add_column :investors, :website, :string
    add_column :investors, :video_url, :text
    add_column :investors, :social_accounts, :jsonb

    add_index  :investors, :social_accounts, using: :gin
  end
end
