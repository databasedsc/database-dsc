require 'rails_helper'

RSpec.describe 'V1::Hubs', :type => :request do

  describe 'GET /v1/hubs/:id' do

    let!(:hub) do
      FactoryGirl.create(:hub,
        name: 'Dogpatch Labs',
        logo: 'https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1397188849/56ce6584c4d9ad5db3127a6906857e0e.png',
        short_description:  'Dogpatch Labs is a pay to play co-working space for tech start-ups between seed and series a.',
        hub_type: ['Co-Working'],
        long_description: "Dogpatch Labs was founded in San Francisco in 2009 by Polaris Ventures. Since then it has housed a litany of successful startups including Instagram (sold to Facebook for $1 billion). Domestically it has been home to such success stories as Logentries and Intercom who have raised $10 million and $30 million respectively. In total @dogpatchlabs companies have raised over $250 million in angel and venture financing from investors such as Ron Conway, Ray Ozzie and Chris Sacca, and funds including Sequoia Capital, Benchmark Capital, Andreessen Horowitz, USV and many more. Today Dogpatch Labs is a pay-to-play co-working space for startups. Located in one of Dublin's most iconic buildings, The CHQ building, we have over 20,000 square feet of co-working and meeting space and house some of Ireland's leading local and international startups who are focused on scaling from seed to series A and beyond.",
        founded:  '2008',
        contact:  'Patrick Walsh',
        address:  '',
        alumni:  [],
        contact_urls:  {},
        events:  [],
        programs:  ""
      )
    end

    it 'should return a valid hub' do
      get "/v1/hubs/#{hub.id}"
      hub_json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(hub_json['name']).to eq('Dogpatch Labs')
      expect(hub_json['logo']).to eq('https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1397188849/56ce6584c4d9ad5db3127a6906857e0e.png')
      expect(hub_json['hub_type']).to eq(['Co-Working'])
      expect(hub_json['short_description']).to eq('Dogpatch Labs is a pay to play co-working space for tech start-ups between seed and series a.')
      expect(hub_json['long_description']).to eq("Dogpatch Labs was founded in San Francisco in 2009 by Polaris Ventures. Since then it has housed a litany of successful startups including Instagram (sold to Facebook for $1 billion). Domestically it has been home to such success stories as Logentries and Intercom who have raised $10 million and $30 million respectively. In total @dogpatchlabs companies have raised over $250 million in angel and venture financing from investors such as Ron Conway, Ray Ozzie and Chris Sacca, and funds including Sequoia Capital, Benchmark Capital, Andreessen Horowitz, USV and many more. Today Dogpatch Labs is a pay-to-play co-working space for startups. Located in one of Dublin's most iconic buildings, The CHQ building, we have over 20,000 square feet of co-working and meeting space and house some of Ireland's leading local and international startups who are focused on scaling from seed to series A and beyond.")
      expect(hub_json['founded']).to eq('2008')
      expect(hub_json['contact']).to eq('Patrick Walsh')
    end
  end

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
          application_deadline: 10.hours.from_now
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
        get '/v1/hubs?hubType=%7B%22E%22:true%7D'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(2)
      end

      it 'should return hubs filtered by CW type' do
        get '/v1/hubs?hubType=%7B%22CW%22:true%7D'
        hubs_json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(hubs_json.size).to eq(1)
      end
    end
  end
end
