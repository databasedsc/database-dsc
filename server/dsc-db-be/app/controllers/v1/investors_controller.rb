class V1::InvestorsController < ApplicationController
  def index
    if params[:searchText]
      investors = Investor.search(params[:searchText])
    else
      investors = Investor.all
    end
    render json: investors, status: 200
  end
end
