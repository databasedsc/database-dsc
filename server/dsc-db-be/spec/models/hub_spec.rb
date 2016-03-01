# == Schema Information
#
# Table name: hubs
#
#  id                :integer          not null, primary key
#  name              :string
#  logo              :string
#  short_description :text
#  programs          :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'rails_helper'

RSpec.describe Hub, :type => :model do
  [
    :name, :logo, :short_description, :programs
  ].each do |column|
    it { should have_db_column(column) }
  end
end
