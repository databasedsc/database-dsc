class AddWebsiteAndSocialAccountsToMultinationals < ActiveRecord::Migration[5.0]
  def change
    add_column :multinationals, :website, :string
    add_column :multinationals, :social_accounts, :jsonb
    [:twitter, :facebook, :linkedin].each do |column|
      remove_column :multinationals, column
    end

    add_index :multinationals, :social_accounts, using: :gin
  end
end
