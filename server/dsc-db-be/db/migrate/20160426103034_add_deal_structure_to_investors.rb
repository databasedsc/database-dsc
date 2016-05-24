class AddDealStructureToInvestors < ActiveRecord::Migration
  def change
    add_column :investors, :deal_structure, :string
  end
end
