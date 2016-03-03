require 'rails_helper'

RSpec.describe 'V1::Multinationals', :type => :request do
  describe 'GET /v1/multinationals' do

    let!(:facebook) do
      FactoryGirl.create :multinational,
        name: 'Facebook',
        logo: 'https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_250/v1408491700/ypqf483smhnqo0rh6mff.png',
        short_description: 'Facebook is an online social networking service that enables its users to connect with friends and family as well as make new connections.',
        headquarters: 'Menlo Park, CA',
        local_office: '4 Grand Canal Street Lower, Dublin 2, Dublin',
        startup_packages: ['very good package'],
        employees: 75,
        emea_hq: true,
        events_space: true,
        functions: ['S', 'F', 'MF']

      FactoryGirl.create(
        :multinational,
        employees: 10000
      )
      FactoryGirl.create(:multinational)
    end



    it 'should return a list of multinationals' do
      get '/v1/multinationals'
      multinationals_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(multinationals_json.size).to eq(3)
    end


    describe 'keyword search' do
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

    describe 'filters' do
      it 'should return the multinationals matching the filters criteria emeaHq' do
        get '/v1/multinationals?emeaHq=Yes'
        multinationals_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(multinationals_json.size).to eq(1)
      end

      it 'should return the multinationals matching the filters criteria startupPackages' do
        get '/v1/multinationals?startupPackages=Yes'
        multinationals_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(multinationals_json.size).to eq(1)
      end

      it 'should return the multinationals matching the filters criteria employees' do
        get '/v1/multinationals?employees=50-100'
        multinationals_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(multinationals_json.size).to eq(1)
      end

      it 'should return the multinationals matching the filters criteria employees' do
        get '/v1/multinationals?employees=1000%2B'
        multinationals_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(multinationals_json.size).to eq(1)
      end

      it 'should return the multinationals matching the filters criteria eventsSpace' do
        get '/v1/multinationals?eventsSpace=Yes'
        multinationals_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(multinationals_json.size).to eq(1)
      end

      it 'should return the multinationals matching the filters criteria functions' do
        get '/v1/multinationals?functions=%7B%22S%22:true,%22F%22:true%7D'
        multinationals_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(multinationals_json.size).to eq(1)
      end
    end
  end
end
