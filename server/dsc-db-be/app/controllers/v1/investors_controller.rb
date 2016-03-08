class V1::InvestorsController < ApplicationController
  before_action :funding_types_parse, only: :index

  def index
    if params[:searchText]
      investors = Investor.search(params[:searchText])
    else
      investors = Investor.all
    end

    investors = investors.funding_types(params[:fundingTypes]) if params[:fundingTypes].present?
    investors = investors.select_numeric_scope('investment_size', params[:investmentSize]) if params[:investmentSize]
    investors = investors.deal_structure(params[:dealStructure]) if params[:dealStructure]

    paginate json: investors, status: 200
  end

  def show
    investor = Investor.find(params[:id])
    render json: investor, status: 200
  end

  private

  def funding_types_parse
    params[:fundingTypes] = JSON.parse(params[:fundingTypes]).select { |k, v| v }.keys.join(' ') if params[:fundingTypes]
  end
end
