class AddFundingProvidedToHubs < ActiveRecord::Migration
  def change
    add_column :hubs, :funding_provided, :boolean
  end
end
