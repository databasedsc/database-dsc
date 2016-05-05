module V1
  class CompaniesController < ApplicationController
    before_action :dehumanize_params, only: :index

    def index
      if params[:company_ids].present?
        companies = CompanySearchService.new(filter_params).call
        render json: companies, status: 200
      else
        companies = CompanySearchService.new(filter_params).call
        paginate json: companies, status: 200
      end
    end

    def show
      company = Company.find(params[:id])
      render json: company, status: 200
    end

    private

    def dehumanize_params
      params.each do |key, value|
        params[key] = true if value.downcase == 'yes'
        params[key] = false if value.downcase == 'no'
      end
    end

    def filter_params
      params.permit(:searchText, :employees, :fundingStage, :fundingAmount,
        :productStage, :companyStage, :targetMarkets, :businessModel,
        :operationalStatus, :tag, :recently_funded, :company_ids)
    end
  end
end
