class AddHeadquartersToCompany < ActiveRecord::Migration
  def change
    add_column :companies, :headquarters, :string
  end
end
