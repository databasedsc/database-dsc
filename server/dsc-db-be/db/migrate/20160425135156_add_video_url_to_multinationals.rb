class AddVideoUrlToMultinationals < ActiveRecord::Migration
  def change
    add_column :multinationals, :video_url, :text
  end
end
