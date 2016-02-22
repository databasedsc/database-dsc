class AddHeadquartersToCompany < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :headquarters, :string
  end
end
