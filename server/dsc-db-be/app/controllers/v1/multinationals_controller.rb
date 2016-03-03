class V1::MultinationalsController < ApplicationController
  before_action :dehumanize_params, only: :index

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
    multinationals = multinationals.functions(JSON.parse(params[:functions]).select { |k, v| v }.keys.join(' ')) if params[:functions]

    render json: multinationals, status: 200
  end

  private

  def dehumanize_params
    params.each do |key, value|
      params[key] = true if value.downcase == 'yes'
      params[key] = false if value.downcase == 'no'
    end
  end
end
