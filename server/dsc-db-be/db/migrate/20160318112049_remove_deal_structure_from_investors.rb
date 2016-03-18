class RemoveDealStructureFromInvestors < ActiveRecord::Migration[5.0]
  def change
    remove_column :investors, :deal_structure
  end
end
