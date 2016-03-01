require 'rails_helper'

RSpec.describe 'V1::Investors', :type => :request do
  describe 'GET /v1/investors/:id' do

    let!(:facebook) do
      FactoryGirl.create :investor,
        name: "Frontline Ventures",
        logo: "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1397179018/863daa91a3ecb96fed179502587ff7a3.png",
        headquarters: "London",
        short_description: "We are a pioneering early-stage venture capital firm, believing in ideas and investing in passion.",
        office_locations: ["26-28 Lombard Street East, First Floor, Dublin 2"],
        local_office: "Grand Canal Area",
        tags: ["Big Data", "Cloud Services", "Internet", "Mobile"],
        "founders": [
          {
            "name": "Shay Garvey",
            "linkedin": "shagarvey"
          }
        ]
    end
    let! (:mtns) { 2.times { FactoryGirl.create(:investor) } }

    it 'should return a list of investors' do
      get '/v1/investors'
      investors_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(investors_json.size).to eq(3)
    end

    it 'should return a list of investors filtered by search text' do
      get '/v1/investors?searchText=Frontline+Ventures'
      investors_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(investors_json.size).to eq(1)
    end
    #
    it 'should return a list of investors filtered by short description' do
      get '/v1/investors?searchText=pioneering+early-stage+venture'
      investors_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(investors_json.size).to eq(1)
    end
    #
    it 'should return a list of investors filtered by headquarters' do
      get '/v1/investors?searchText=London'
      investors_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(investors_json.size).to eq(1)
    end

    it 'should return a list of investors filtered by local office' do
      get '/v1/investors?searchText=Grand+Canal'
      investors_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(investors_json.size).to eq(1)
    end

    it 'should return a list of investors filtered by tags' do
      get '/v1/investors?searchText=Cloud+Services'
      investors_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(investors_json.size).to eq(1)
    end

    it 'should return a list of investors filtered by office locations' do
      get '/v1/investors?searchText=26-28+Lombard+Street+East'
      investors_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(investors_json.size).to eq(1)
    end
  end
end
