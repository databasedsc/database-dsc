require 'rails_helper'

RSpec.describe Investor, :type => :model do
  [
    :name, :logo, :headquarters, :founders, :short_description, :local_office, :tags, :office_locations
  ].each do |column|
    it { should have_db_column(column) }
  end
end
