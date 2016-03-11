module V1
  module Admin
    class CompaniesController < ApplicationController

      def create
        company = Company.create(company_params)
        render json: company, status: 200
      end

      private

      def company_params
        params.require(:company).permit(
          :name, :logo, :short_description, :long_description, :acquisitions, :geo_markets, :headquarters,
          :formerly_known_as, :founded, :categories, :incubator, :funding_stage, :employees, :funding_amount,
          :business_model, :company_stage, :operational_status, :government_assistance, :selling, :looking_for,
          :contact, :founders, :office_locations, funding_rounds: [:type, :amount, :date]
        )
      end

    end
  end
end
