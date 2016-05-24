class AddFormerlyKnownAsToCompany < ActiveRecord::Migration
  def change
    add_column :companies, :formerly_known_as, :string
  end
end
