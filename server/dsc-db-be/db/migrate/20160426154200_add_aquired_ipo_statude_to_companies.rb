class AddAquiredIpoStatudeToCompanies < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :acquired, :string
  end
end
