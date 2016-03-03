class V1::HubsController < ApplicationController
  def index
    if params[:searchText]
      hubs = Hub.search(params[:searchText])
    else
      hubs = Hub.all
    end

    hubs = hubs.application_deadline(params[:applicationDeadlines]) if params[:applicationDeadlines]
    hubs = hubs.hub_type(params[:hubType]) if params[:hubType]

    render json: hubs, status: 200
  end
end
