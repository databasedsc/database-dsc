class AddFormerlyKnownAsToCompany < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :formerly_known_as, :string
  end
end
