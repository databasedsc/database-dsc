class V1::MultinationalsController < ApplicationController
  before_action :dehumanize_params, only: :index
  before_action :functions_parse, only: :index

  def index
    if params[:searchText]
      multinationals = Multinational.search(params[:searchText])
    else
      multinationals = Multinational.all
    end

    multinationals = multinationals.emea_hq(params[:emeaHq]) if !params[:emeaHq].nil?
    multinationals = multinationals.startup_packages(params[:startupPackages]) if !params[:startupPackages].nil?
    multinationals = multinationals.select_numeric_scope('employees', params[:employees]) if params[:employees]
    multinationals = multinationals.events_space(params[:eventsSpace]) if !params[:eventsSpace].nil?
    multinationals = multinationals.functions(params[:functions]) if params[:functions].present?

    render json: multinationals, status: 200
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
end
