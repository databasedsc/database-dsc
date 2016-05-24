class AddEmeaHqStartupPackagesEmployeesEventsSpaceAndFunctionsToMultinationals < ActiveRecord::Migration
  def change
    add_column :multinationals, :emea_hq, :boolean, default: false
    add_column :multinationals, :startup_packages, :text, array: true, default: []
    add_column :multinationals, :employees, :integer
    add_column :multinationals, :events_space, :boolean, default: false
    add_column :multinationals, :functions, :text, array: true, default: []
  end
end
