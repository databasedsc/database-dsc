require 'rails_helper'

RSpec.describe 'V1::Multinationals', :type => :request do
  describe 'GET /v1/multinationals/:id' do

    let!(:facebook) do
      FactoryGirl.create :multinational,
        name: "Facebook",
        logo: "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_250/v1408491700/ypqf483smhnqo0rh6mff.png",
        short_description: "Facebook is an online social networking service that enables its users to connect with friends and family as well as make new connections.",
        headquarters: "Menlo Park, CA",
        local_office: "4 Grand Canal Street Lower, Dublin 2, Dublin"
    end
    let! (:mtns) { 2.times { FactoryGirl.create(:multinational) } }

    it 'should return a list of multinationals' do
      get '/v1/multinationals'
      multinationals_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(multinationals_json.size).to eq(3)
    end

    it 'should return a list of multinationals filtered by search text' do
      get '/v1/multinationals?searchText=facebook'
      multinationals_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(multinationals_json.size).to eq(1)
    end

    it 'should return a list of multinationals filtered by short description' do
      get '/v1/multinationals?searchText=social+networking'
      multinationals_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(multinationals_json.size).to eq(1)
    end

    it 'should return a list of multinationals filtered by headquarters' do
      get '/v1/multinationals?searchText=Menlo'
      multinationals_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(multinationals_json.size).to eq(1)
    end

    it 'should return a list of multinationals filtered by local office' do
      get '/v1/multinationals?searchText=Grand+Canal'
      multinationals_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(multinationals_json.size).to eq(1)
    end
  end
end
