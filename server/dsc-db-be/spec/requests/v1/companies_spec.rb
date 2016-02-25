require 'rails_helper'

RSpec.describe 'V1::Companies', :type => :request do
  describe 'GET /v1/companies/:id' do
    let!(:company) do
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
        incubator: 'NDRC',
        employees: 140,
        funding_stage: 'Bootstrapped',
        product_stage: 'Complete',
        geo_markets: 'IE'
      )
    end

    it 'should return a company' do
      get "/v1/companies/#{company.id}"
      company_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(company_json['name']).to eq('mustard')
    end
  end

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
        incubator: 'NDRC',
        employees: 140,
        funding_stage: 'Bootstrapped',
        product_stage: 'Complete',
        geo_markets: 'IE'
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
        incubator: '',
        business_model: 'B2C',
        operational_status: 'Active',
        geo_markets: 'UK'
      )
      FactoryGirl.create(
        :company,
        short_description: 'third company',
        company_stage: 'Growth',
        funding_amount: 150000000,
        geo_markets: 'G'
      )
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

      describe 'filters' do
        it 'should return companies filtered by employees number' do
          get '/v1/companies?employees=101-250'
          companies_json = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(companies_json.size).to eq(1)
        end

        it 'should return companies filtered by funding stage' do
          get '/v1/companies?fundingStage=Bootstrapped'
          companies_json = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(companies_json.size).to eq(1)
        end

        it 'should return companies filtered by funding amount' do
          get '/v1/companies?fundingAmount=%3E100m'
          companies_json = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(companies_json.size).to eq(1)
        end

        it 'should return companies filtered by product stage' do
          get '/v1/companies?productStage=Complete'
          companies_json = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(companies_json.size).to eq(1)
        end

        describe 'Geographical Markets' do
          it 'should return companies filtered by IE geographical market' do
            get '/v1/companies?geographicalMarkets=%7B%22IE%22:true%7D'
            companies_json = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(companies_json.size).to eq(1)
          end

          it 'should return companies filtered by multiple geographical markets' do
            get '/v1/companies?geographicalMarkets=%7B%22IE%22:true,%22UK%22:true%7D'
            companies_json = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(companies_json.size).to eq(2)
          end

          it 'should return companies filtered by list of true/false geographical markets' do
            get '/v1/companies?geographicalMarkets=%7B%22IE%22:true,%22UK%22:false%7D'
            companies_json = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(companies_json.size).to eq(1)
          end
        end

        it 'should return companies filtered by business model' do
          get '/v1/companies?businessModel=B2C'
          companies_json = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(companies_json.size).to eq(1)
        end

        it 'should return companies filtered by company stage' do
          get '/v1/companies?companyStage=Growth'
          companies_json = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(companies_json.size).to eq(1)
        end

        it 'should return companies filtered by company status' do
          get '/v1/companies?operationalStatus=Active'
          companies_json = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(companies_json.size).to eq(1)
        end


      end

    end

  end
end


