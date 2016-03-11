class AddVideoUrlToCompany < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :video_url, :text
  end
end
