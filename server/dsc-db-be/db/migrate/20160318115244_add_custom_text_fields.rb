class AddCustomTextFields < ActiveRecord::Migration
  def change
    add_column :companies, :custom_field_1, :text
    add_column :companies, :custom_field_2, :text
    add_column :companies, :custom_field_3, :text
    add_column :companies, :custom_field_4, :text

    add_column :multinationals, :custom_field_1, :text
    add_column :multinationals, :custom_field_2, :text
    add_column :multinationals, :custom_field_3, :text
    add_column :multinationals, :custom_field_4, :text

    add_column :investors, :custom_field_1, :text
    add_column :investors, :custom_field_2, :text
    add_column :investors, :custom_field_3, :text
    add_column :investors, :custom_field_4, :text

    add_column :hubs, :custom_field_1, :text
    add_column :hubs, :custom_field_2, :text
    add_column :hubs, :custom_field_3, :text
    add_column :hubs, :custom_field_4, :text
  end
end
