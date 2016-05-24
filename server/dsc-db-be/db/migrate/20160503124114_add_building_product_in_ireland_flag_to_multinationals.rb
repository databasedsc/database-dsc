class AddBuildingProductInIrelandFlagToMultinationals < ActiveRecord::Migration
  def change
    add_column :multinationals,
               :building_product_in_ireland,
               :boolean,
               default: false
  end
end
