require 'rails_helper'

RSpec.describe Company, :type => :model do
  [:name, :logo, :short_description].each do |column|
    it { should have_db_column(column) }
  end
end
