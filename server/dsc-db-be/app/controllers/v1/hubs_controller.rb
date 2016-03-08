class V1::HubsController < ApplicationController
  before_action :hub_types_parse, only: :index

  def index
    if params[:searchText]
      hubs = Hub.search(params[:searchText])
    else
      hubs = Hub.all
    end

    hubs = hubs.application_deadline(params[:applicationDeadlines]) if params[:applicationDeadlines]
    hubs = hubs.hub_type(params[:hubType]) if params[:hubType].present?

    paginate json: hubs, status: 200
  end

  def show
    hub = Hub.find(params[:id])
    render json: hub, status: 200
  end

  private
  def hub_types_parse
    params[:hubType] = JSON.parse(params[:hubType]).select { |k, v| v }.keys.join(' ') if params[:hubType]
  end
end
