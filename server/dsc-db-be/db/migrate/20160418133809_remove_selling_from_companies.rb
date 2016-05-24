class RemoveSellingFromCompanies < ActiveRecord::Migration
  def change
    remove_column :companies, :selling, :boolean
  end
end
