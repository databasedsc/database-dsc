class AddNameLogoAndShortDescriptionToCompany < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :name, :string
    add_column :companies, :logo, :string
    add_column :companies, :short_description, :text
  end
end
