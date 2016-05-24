class AddRecentyFundedToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :recently_funded, :boolean, default: false
  end
end
