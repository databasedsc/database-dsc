class AddAquiredIpoStatudeToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :acquired, :string
  end
end
