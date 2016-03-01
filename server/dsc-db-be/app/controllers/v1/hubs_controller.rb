class V1::HubsController < ApplicationController
  def index
    if params[:searchText]
      hubs = Hub.search(params[:searchText])
    else
      hubs = Hub.all
    end
    render json: hubs, status: 200
  end
end
