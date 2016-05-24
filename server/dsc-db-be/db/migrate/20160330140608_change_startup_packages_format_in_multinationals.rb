class ChangeStartupPackagesFormatInMultinationals < ActiveRecord::Migration
  def up
    remove_column :multinationals, :startup_packages
    add_column :multinationals, :startup_packages, :jsonb
  end

  def down
    remove_column :multinationals, :startup_packages
    add_column :multinationals, :startup_packages, :text
  end
end
