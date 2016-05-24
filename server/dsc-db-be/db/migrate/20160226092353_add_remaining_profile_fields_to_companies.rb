class AddRemainingProfileFieldsToCompanies < ActiveRecord::Migration
  def change
      add_column :companies, :fundings, :text
      add_column :companies, :looking_for, :text
      add_column :companies, :selling, :boolean
      add_column :companies, :government_assistance, :string
      add_column :companies, :contact, :text
      add_column :companies, :long_description, :text
      add_column :companies, :founded, :string
      add_column :companies, :acquisitions, :text
  end
end
