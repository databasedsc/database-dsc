require 'rails_helper'

RSpec.describe 'V1::Hubs', :type => :request do
  describe 'GET /v1/hubs' do

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
end
