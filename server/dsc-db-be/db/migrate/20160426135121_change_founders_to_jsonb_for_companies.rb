class ChangeFoundersToJsonbForCompanies < ActiveRecord::Migration
  def change
    remove_column :companies, :founders, :text

    add_column :companies, :founders, :jsonb
    add_index  :companies, :founders, using: :gin
  end
end
