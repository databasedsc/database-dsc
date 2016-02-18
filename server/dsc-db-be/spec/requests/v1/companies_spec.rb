require 'rails_helper'

RSpec.describe 'V1::Companies', :type => :request do
  describe 'GET /v1/companies' do

    before(:each) do
      3.times do
        FactoryGirl.create(:company)
      end
    end

    it 'should return a list of companies' do
      get '/v1/companies'
      companies_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(companies_json.size).to eq(3)
    end
  end
end
