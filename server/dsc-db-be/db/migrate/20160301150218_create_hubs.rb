class CreateHubs < ActiveRecord::Migration[5.0]
  def change
    create_table :hubs do |t|
      t.string :name
      t.string :logo
      t.text :short_description
      t.text :programs

      t.timestamps
    end
  end
end
