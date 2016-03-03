class V1::InvestorsController < ApplicationController
  def index
    if params[:searchText]
      investors = Investor.search(params[:searchText])
    else
      investors = Investor.all
    end

    investors = investors.funding_types(params[:fundingTypes]) if params[:fundingTypes]
    investors = investors.select_numeric_scope('investment_size', params[:investmentSize]) if params[:investmentSize]
    investors = investors.deal_structure(params[:dealStructure]) if params[:dealStructure]

    render json: investors, status: 200
  end
end
