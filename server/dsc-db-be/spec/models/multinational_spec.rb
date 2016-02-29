require 'rails_helper'

RSpec.describe Multinational, :type => :model do
  [
    :name,
    :logo,
    :short_description,
    :headquarters,
    :local_office
  ].each do |column|
    it { should have_db_column(column) }
  end
end
