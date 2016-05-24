class RemoveBoardMembersFromInvestors < ActiveRecord::Migration
  def change
    remove_column :investors, :board_members, :text, array: true, default: []
  end
end
