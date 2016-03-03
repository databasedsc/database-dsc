require 'rails_helper'

RSpec.describe 'V1::Hubs', :type => :request do
  describe 'GET /v1/hubs' do
    describe 'Search' do
      let!(:hubs) do
          FactoryGirl.create(
            :hub,
            name: 'NDRC',
            short_description: 'short desc',
            programs: 'good programs'
          )
          FactoryGirl.create(
            :hub,
            name: 'Dogpatch Labs',
            short_description: 'a little longer',
            programs: 'a different one'
          )
      end

      it 'should return a list of hubs' do
        get '/v1/hubs'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(2)
      end

      it 'should return the hub that was searched for by name' do
        get '/v1/hubs?searchText=NDRC'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(1)
      end

      it 'should return the hub that was searched for by short description' do
        get '/v1/hubs?searchText=short'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(1)
      end

      it 'should return the hub that was searched for by programs' do
        get '/v1/hubs?searchText=good+programs'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(1)
      end
    end

    describe 'application deadline' do
      let!(:hubs) do
        FactoryGirl.create(
          :hub,
          application_deadline: 5.days.from_now
        )
        FactoryGirl.create(
          :hub,
          application_deadline: 1.months.from_now
        )

        FactoryGirl.create(
          :hub,
          application_deadline: 2.months.from_now
        )
        FactoryGirl.create(
          :hub,
          application_deadline: 5.months.from_now
        )
        FactoryGirl.create(
          :hub,
          application_deadline: 2.months.ago
        )
      end

      it 'should return the hubs that match the application deadline filter criteria' do
        get '/v1/hubs?applicationDeadlines=This+Month'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(1)
      end

      it 'should return the hubs that match the application deadline filter criteria' do
        get '/v1/hubs?applicationDeadlines=Next+Month'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(2)
      end

      it 'should return the hubs that match the application deadline filter criteria' do
        get '/v1/hubs?applicationDeadlines=Next+Three+Months'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(3)
      end

      it 'should return the hubs that match the application deadline filter criteria' do
        get '/v1/hubs?applicationDeadlines=Over+Three+Months'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(4)
      end


    end

    describe 'hub type' do

      let!(:hubs) do
        FactoryGirl.create(:hub,
          hub_type: ['E']
        )

        FactoryGirl.create(:hub,
          hub_type: ['E', 'CW']
        )

        FactoryGirl.create(:hub
        )
      end

      it 'should return hubs filtered by E type' do
        get '/v1/hubs?hubType=E'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(2)
      end

      it 'should return hubs filtered by CW type' do
        get '/v1/hubs?hubType=CW'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(1)
      end
    end
  end
end
