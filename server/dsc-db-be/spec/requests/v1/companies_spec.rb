require 'rails_helper'

RSpec.describe 'V1::Companies', :type => :request do
  describe 'GET /v1/companies' do

    before(:each) do
      FactoryGirl.create(
        :company,
        name: 'mustard',
        short_description: 'something',
        headquarters: 'Dublin',
        formerly_known_as: 'ketchup',
        founders: 'Kevin Fogarty',
        categories: 'Personalisation',
        investors: '',
        office_locations: '',
        incubator: 'NDRC'
      )
      FactoryGirl.create(
        :company,
        name: 'second company',
        short_description: 'another search',
        headquarters: 'Cork',
        formerly_known_as: '',
        categories: 'Event Management',
        investors: 'Delta Partners',
        office_locations: 'Tara Street',
        incubator: ''
      )
      FactoryGirl.create(:company)
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


    describe('keyword search') do
      it 'should return companies filtered by headquarters field' do
        get '/v1/companies?searchText=Cork'
        companies_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(companies_json.size).to eq(1)
      end

      it 'should return companies filtered by formerly_known_as field' do
        get '/v1/companies?searchText=Ketchup'
        companies_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(companies_json.size).to eq(1)
      end

      it 'should return companies filtered by founders field' do
        get '/v1/companies?searchText=Fogarty'
        companies_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(companies_json.size).to eq(1)
      end

      it 'should return companies filtered by categories field' do
        get '/v1/companies?searchText=Event+Management'
        companies_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(companies_json.size).to eq(1)
      end

      it 'should return companies filtered by investors field' do
        get '/v1/companies?searchText=Delta+Partners'
        companies_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(companies_json.size).to eq(1)
      end

      it 'should return companies filtered by office locations field' do
        get '/v1/companies?searchText=Tara+Street'
        companies_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(companies_json.size).to eq(1)
      end

      it 'should return companies filtered by incubator/accelerator field' do
        get '/v1/companies?searchText=NDRC'
        companies_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(companies_json.size).to eq(1)
      end

    end

  end
end
