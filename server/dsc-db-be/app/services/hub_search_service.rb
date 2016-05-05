class HubSearchService

  def initialize(params)
    @params = params
  end

  def call
    if @params[:searchText].present?
      hubs = Hub.search(@params[:searchText])
    elsif @params[:tag].present?
      hubs = Hub.search_by_tag(@params[:tag])
    else
      hubs = Hub.all
    end

    hubs = hubs.application_deadline(@params[:applicationDeadlines]) if @params[:applicationDeadlines]
    hubs = hubs.funding_provided(@params[:fundingProvided]) if !@params[:fundingProvided].nil?
    hubs = hubs.hub_type(@params[:hubType]) if @params[:hubType].present?

    hubs
  end

end
