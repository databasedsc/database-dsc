class CreateUserEntityClaims < ActiveRecord::Migration
  def change
    create_table :user_entity_claims do |t|
      t.references :user
      t.integer :entity_type
      t.integer :entity_id
      t.timestamps null: false
    end
  end
end
