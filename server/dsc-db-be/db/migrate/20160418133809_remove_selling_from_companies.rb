class RemoveSellingFromCompanies < ActiveRecord::Migration[5.0]
  def change
    remove_column :companies, :selling, :boolean
  end
end
