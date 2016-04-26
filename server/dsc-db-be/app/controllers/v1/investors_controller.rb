class V1::InvestorsController < ApplicationController
  before_action :funding_types_parse, only: :index

  def index
    investors = InvestorSearchService.new(filter_params).call
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

  def filter_params
    params.permit(:searchText, :fundingTypes, :investmentSize, :tag)
  end
end
