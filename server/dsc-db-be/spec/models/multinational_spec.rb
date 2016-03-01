# == Schema Information
#
# Table name: multinationals
#
#  id                :integer          not null, primary key
#  name              :string
#  logo              :string
#  short_description :text
#  headquarters      :string
#  local_office      :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

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
