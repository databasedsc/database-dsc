module V1
  class CompaniesController < ApplicationController

    def index
      companies = CompanySearchService.new(filter_params).call
      paginate json: companies, status: 200
    end

    def show
      company = Company.find(params[:id])
      render json: company, status: 200
    end

    private
    def filter_params
      params.permit(:searchText, :employees, :fundingStage, :fundingAmount, :productStage, :companyStage, :targetMarkets, :businessModel, :operationalStatus)
    end
  end
end
