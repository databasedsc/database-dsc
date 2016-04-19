require 'rails_helper'

RSpec.describe 'V1::Companies', :type => :request do
  describe 'GET /v1/companies/:id' do
    let!(:company) do
      FactoryGirl.create(
        :company,
        "name": "Mustard",
        "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1455114908/tmpxdogqv3vysbaww9g3.png",
        "acquisitions": "Acquired by Sandwich",
        "short_description": "The on demand staffing network",
        "long_description": "Mustard instantly connects those with short term positions to fill, with the best available candidates. A data-science focussed company, pairing gamification and on demand technology to build the worlds largest and most functional network of instant talent.",
        "headquarters": "Dublin",
        "formerly_known_as": "Ketchup",
        "founders": "Gavin Fogarty",
        "categories": "Technology, Social Recruiting, Event Management",
        "investors": "Undisclosed",
        "office_locations": "NDRC at the Digital Exchange, Crane Street, Dublin 8",
        "incubator": "NDRC",
        "funding_stage": "Seed",
        "employees": 6,
        "funding_amount": 250000,
        "product_stage": "Live",
        "target_markets": "EU",
        "business_model": "B2B",
        "company_stage": "Growth",
        "operational_status": "Active",
        "government_assistance": "NDRC",
        "looking_for": "Good Talent",
        "contact": "heya@mustard.ie",
        "founded": "2015",
        "funding_rounds": [
          {
            "amount": "200k",
            "date": "June 2015",
            "type": "Seed"
          }
        ]
      )
    end

    it 'should return a company' do
      get "/v1/companies/#{company.id}"
      company_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(company_json['name']).to eq('Mustard')
      expect(company_json['logo']).to eq('https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1455114908/tmpxdogqv3vysbaww9g3.png')
      expect(company_json['acquisitions']).to eq('Acquired by Sandwich')
      expect(company_json['short_description']).to eq('The on demand staffing network')
      expect(company_json['long_description']).to eq('Mustard instantly connects those with short term positions to fill, with the best available candidates. A data-science focussed company, pairing gamification and on demand technology to build the worlds largest and most functional network of instant talent.')
      expect(company_json['headquarters']).to eq('Dublin')
      expect(company_json['formerly_known_as']).to eq('Ketchup')
      expect(company_json['founders']).to eq('Gavin Fogarty')
      expect(company_json['categories']).to eq('Technology, Social Recruiting, Event Management')
      expect(company_json['investors']).to eq('Undisclosed')
      expect(company_json['office_locations']).to eq('NDRC at the Digital Exchange, Crane Street, Dublin 8')
      expect(company_json['incubator']).to eq('NDRC')
      expect(company_json['funding_stage']).to eq('Seed')
      expect(company_json['employees']).to eq(6)
      expect(company_json['funding_amount']).to eq(250000)
      expect(company_json['product_stage']).to eq('Live')
      expect(company_json['target_markets']).to eq('EU')
      expect(company_json['business_model']).to eq('B2B')
      expect(company_json['company_stage']).to eq('Growth')
      expect(company_json['operational_status']).to eq('Active')
      expect(company_json['government_assistance']).to eq('NDRC')
      expect(company_json['looking_for']).to eq('Good Talent')
      expect(company_json['contact']).to eq('heya@mustard.ie')
      expect(company_json['founded']).to eq('2015')
      expect(company_json['funding_rounds'].size).to eq(1)
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
        product_stage: 'Live',
        target_markets: 'IE'
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
        target_markets: 'UK'
      )
      FactoryGirl.create(
        :company,
        short_description: 'third company',
        company_stage: 'Growth',
        funding_amount: 150000000,
        target_markets: 'G'
      )
    end



    describe('keyword search') do
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
          get '/v1/companies?productStage=Live'
          companies_json = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(companies_json.size).to eq(1)
        end

        describe 'Target Markets' do
          it 'should return companies filtered by IE target market' do
            get '/v1/companies?targetMarkets=%7B%22IE%22:true%7D'
            companies_json = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(companies_json.size).to eq(1)
          end

          it 'should return companies filtered by multiple target markets' do
            get '/v1/companies?targetMarkets=%7B%22IE%22:true,%22UK%22:true%7D'
            companies_json = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(companies_json.size).to eq(2)
          end

          it 'should return companies filtered by list of true/false target markets' do
            get '/v1/companies?targetMarkets=%7B%22IE%22:true,%22UK%22:false%7D'
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
