class AddRemainingFieldsToInvestors < ActiveRecord::Migration
  def change
    add_column :investors, :funds_raised, :string
    add_column :investors, :regions, :text
    add_column :investors, :contact, :string
    add_column :investors, :contact_email, :string
    add_column :investors, :preferred_contact, :text
    add_column :investors, :co_investors, :text
    add_column :investors, :board_members, :text, array: true, default: []
    add_column :investors, :similar_investors, :text
    add_column :investors, :long_description, :text
    add_column :investors, :exits_ipos, :string
    add_column :investors, :founded, :string
    add_column :investors, :contact_urls, :jsonb

    add_index  :investors, :contact_urls, using: :gin
  end
end
