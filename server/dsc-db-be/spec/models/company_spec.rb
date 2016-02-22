# == Schema Information
#
# Table name: companies
#
#  id                :integer          not null, primary key
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  name              :string
#  logo              :string
#  short_description :text
#

require 'rails_helper'

RSpec.describe Company, :type => :model do
  [:name, :logo, :short_description, :headquarters, :formerly_known_as, :founders, :categories, :investors, :office_locations, :incubator].each do |column|
    it { should have_db_column(column) }
  end
end
