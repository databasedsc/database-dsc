# == Schema Information
#
# Table name: investors
#
#  id                :integer          not null, primary key
#  name              :string
#  logo              :string
#  headquarters      :string
#  founders          :jsonb
#  short_description :text
#  local_office      :string
#  tags              :text             default([]), is an Array
#  office_locations  :text             default([]), is an Array
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

FactoryGirl.define do
  factory :investor do
    name { Faker::Company.name }
    logo "https://placeholdit.imgix.net/~text?txtsize=33&txt=Company%20Logo&w=250&h=140"
    short_description { Faker::Company.catch_phrase }
    headquarters "MyString"
    founders ""
    local_office "MyString"
    tags ["MyText"]
    office_locations "MyText"
  end
end
