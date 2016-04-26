class V1::MultinationalsController < ApplicationController
  before_action :dehumanize_params, only: :index
  before_action :functions_parse, only: :index

  def index
    multinationals = MultinationalSearchService.new(filter_params).call
    paginate json: multinationals, status: 200
  end

  def show
    multinational = Multinational.find(params[:id])
    render json: multinational, status: 200
  end

  private

  def functions_parse
    params[:functions] = JSON.parse(params[:functions]).select { |k, v| v }.keys.join(' ') if params[:functions]
  end

  def dehumanize_params
    params.each do |key, value|
      params[key] = true if value.downcase == 'yes'
      params[key] = false if value.downcase == 'no'
    end
  end

  def filter_params
    params.permit(:searchText, :emeaHq, :startupPackages, :employees, :eventsSpace, :functions, :tag)
  end

end
