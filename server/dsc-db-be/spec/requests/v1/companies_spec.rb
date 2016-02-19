require 'rails_helper'

RSpec.describe 'V1::Companies', :type => :request do
  describe 'GET /v1/companies' do

    before(:each) do
      FactoryGirl.create(:company, name: 'mustard', short_description: "something")

      2.times do
        FactoryGirl.create(:company)
      end
    end

    it 'should return a list of companies' do
      get '/v1/companies'
      companies_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(companies_json.size).to eq(3)
    end

    it 'should return a list of companies filtered by search text' do
      get '/v1/companies?searchText=mustard'
      companies_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(companies_json.size).to eq(1)
    end

    it 'should return a list of companies filtered by search text' do
      get '/v1/companies?searchText=Mustard'
      companies_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(companies_json.size).to eq(1)
    end

    it 'should return a list of companies filtered by search text' do
      get '/v1/companies?searchText=Musta'
      companies_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(companies_json.size).to eq(1)
    end

    it 'should return a list of companies filtered by search text' do
      get '/v1/companies?searchText=something'
      companies_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(companies_json.size).to eq(1)
    end

    it 'should return all companies if filtered by empty search text' do
      get '/v1/companies?searchText='
      companies_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(companies_json.size).to eq(3)
    end

  end
end
