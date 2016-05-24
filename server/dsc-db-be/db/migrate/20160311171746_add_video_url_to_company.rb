class AddVideoUrlToCompany < ActiveRecord::Migration
  def change
    add_column :companies, :video_url, :text
  end
end
