class AddUserIdToEntities < ActiveRecord::Migration
  def change
    add_column :companies, :user_id, :integer
    add_column :investors, :user_id, :integer
    add_column :multinationals, :user_id, :integer
    add_column :hubs, :user_id, :integer
  end
end
