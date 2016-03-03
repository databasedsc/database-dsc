# == Schema Information
#
# Table name: hubs
#
#  id                   :integer          not null, primary key
#  name                 :string
#  logo                 :string
#  short_description    :text
#  programs             :text
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  hub_type             :text             default([]), is an Array
#  application_deadline :date
#

require 'rails_helper'

RSpec.describe Hub, :type => :model do
  [
    :name, :logo, :short_description, :programs, :application_deadline, :hub_type
  ].each do |column|
    it { should have_db_column(column) }
  end


end
