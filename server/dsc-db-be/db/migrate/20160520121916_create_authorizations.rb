class CreateAuthorizations < ActiveRecord::Migration
  def change
    create_table :authorizations do |t|
      t.string :provider
      t.string :uid
      t.string :token
      t.belongs_to :user
      t.string :secret

      t.timestamps
    end

    add_index :authorizations, :user_id
  end
end
