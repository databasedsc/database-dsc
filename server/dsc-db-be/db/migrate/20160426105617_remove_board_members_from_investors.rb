class RemoveBoardMembersFromInvestors < ActiveRecord::Migration[5.0]
  def change
    remove_column :investors, :board_members, :text, array: true, default: []
  end
end
