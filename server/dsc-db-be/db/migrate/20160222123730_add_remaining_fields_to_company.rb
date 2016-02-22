class AddRemainingFieldsToCompany < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :founders, :text
    add_column :companies, :categories, :text
    add_column :companies, :investors, :text
    add_column :companies, :office_locations, :text
    add_column :companies, :incubator, :string
  end
end
