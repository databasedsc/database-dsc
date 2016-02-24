module V1
  class CompaniesController < ApplicationController

    def index
      companies = CompanySearchService.new(filter_params).call
      render json: companies, status: 200
    end

    private
    def filter_params
      params.permit(:searchText, :employees, :fundingStage, :fundingAmount, :productStage, :companyStage, :geographicalMarkets, :businessModel, :operationalStatus)
    end
  end
end
