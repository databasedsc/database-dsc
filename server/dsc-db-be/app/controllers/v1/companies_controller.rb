module V1
  class CompaniesController < ApplicationController

    def index
      if params[:searchText].present?
        companies = Company.search(params[:searchText])
      else
        companies = Company.all
      end
      # TODO: REFACTOR, move this to a service object. Controllers shouldn't be concerned with any of this logic.
      companies = companies.select_numeric_scope('employees', params[:employees]) if params[:employees]
      companies = companies.funding_stage(params[:fundingStage]) if params[:fundingStage]
      companies = companies.product_stage(params[:productStage]) if params[:productStage]
      companies = companies.company_stage(params[:companyStage]) if params[:companyStage]
      companies = companies.geographical_markets(geo_markets) if geo_markets.present?
      companies = companies.business_model(params[:businessModel]) if params[:businessModel]
      companies = companies.operational_status(params[:status]) if params[:status]
      companies = companies.select_numeric_scope('funding_amount', params[:fundingAmount]) if params[:fundingAmount]
      render json: companies, status: 200
    end

    private
    def filter_params
      params.permit(:searchText, :employees, :fundingStage, :fundingAmount, :productStage)
    end

    def geo_markets
      JSON.parse(params[:geographicalMarkets]).select { |k, v| v }.keys.join(' ') if params[:geographicalMarkets]
    end

  end
end
