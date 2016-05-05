class AddVideoUrlToMultinationals < ActiveRecord::Migration[5.0]
  def change
    add_column :multinationals, :video_url, :text
  end
end
