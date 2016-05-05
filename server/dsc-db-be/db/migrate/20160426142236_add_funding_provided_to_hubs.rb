class AddFundingProvidedToHubs < ActiveRecord::Migration[5.0]
  def change
    add_column :hubs, :funding_provided, :boolean
  end
end
