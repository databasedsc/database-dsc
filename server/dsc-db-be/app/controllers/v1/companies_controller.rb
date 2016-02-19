module V1
  class CompaniesController < ApplicationController

    def index
      if params[:searchText].present?
        companies = Company.search(params[:searchText])
      else
        companies = Company.all
      end
      render json: companies, status: 200
    end
  end
end
