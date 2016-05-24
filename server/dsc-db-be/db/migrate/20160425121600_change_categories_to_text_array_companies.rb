class ChangeCategoriesToTextArrayCompanies < ActiveRecord::Migration
  def change
    remove_column :companies, :categories, :text
    add_column :companies, :tags, :string, array: true, default: []
  end
end
