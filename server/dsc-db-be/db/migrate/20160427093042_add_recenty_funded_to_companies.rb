class AddRecentyFundedToCompanies < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :recently_funded, :boolean, default: false
  end
end
