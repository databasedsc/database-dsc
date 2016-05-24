class RemoveDealStructureFromInvestors < ActiveRecord::Migration
  def change
    remove_column :investors, :deal_structure
  end
end
