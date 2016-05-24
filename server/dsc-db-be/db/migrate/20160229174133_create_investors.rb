class CreateInvestors < ActiveRecord::Migration
  def change
    create_table :investors do |t|
      t.string :name
      t.string :logo
      t.string :headquarters
      t.jsonb :founders, default: '{}'
      t.text :short_description
      t.string :local_office
      t.text :tags, array: true, default: []
      t.text :office_locations, array: true, default: []

      t.timestamps
    end

    add_index  :investors, :founders, using: :gin
  end
end
