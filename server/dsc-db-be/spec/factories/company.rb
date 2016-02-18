FactoryGirl.define do
  factory :company do
    name { Faker::Company.name }
    logo "https://placeholdit.imgix.net/~text?txtsize=33&txt=Company%20Logo&w=250&h=140"
    short_description { Faker::Company.catch_phrase }
  end
end
