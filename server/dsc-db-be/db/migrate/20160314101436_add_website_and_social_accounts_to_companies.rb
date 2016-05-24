class AddWebsiteAndSocialAccountsToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :website, :string
    add_column :companies, :social_accounts, :jsonb

    add_index  :companies, :social_accounts, using: :gin
  end
end
