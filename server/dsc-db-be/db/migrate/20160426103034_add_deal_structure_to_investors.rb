class AddDealStructureToInvestors < ActiveRecord::Migration[5.0]
  def change
    add_column :investors, :deal_structure, :string
  end
end
