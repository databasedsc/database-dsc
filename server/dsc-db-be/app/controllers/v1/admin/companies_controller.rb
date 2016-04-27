module V1
  module Admin
    class CompaniesController < ApplicationController

      def create
        company = Company.create(company_params)

        render json: company
      end

      def index

        if params[:filter].present?
          companies = Company.select(:id, :name).where("name ILIKE ?", "%#{params[:filter]}%")
        else
          companies = Company.with_deleted.order(:id)
        end

        render json: companies
      end

      def show
        render json: company
      end

      def update
        company.update(company_params)

        render json: company
      end

      def destroy
        company.destroy

        render status: 204
      end

      def restore
        Company.restore(params[:id])
      end

      private

      def company
        Company.find(params[:id])
      end

      def company_params
        params.require(:company).permit(
          :name, :logo, :short_description, :long_description, :acquisitions,
          :target_markets, :headquarters, :formerly_known_as, :founded,
          { tags: [] }, :incubator, :funding_stage, :employees, :funding_amount,
          :business_model, :company_stage, :operational_status,
          :government_assistance, :looking_for, :contact,
          { founders: [:name, :linkedin] },
          { office_locations: [:id, :address, :lat, :lng] }, :video_url, :website, :custom_field_1,
          :custom_field_2, :custom_field_3, :custom_field_4, :acquired,
          { social_accounts: [:twitter, :linkedin, :facebook] }, :product_stage,
          { funding_rounds: [:type, :amount, :date, investors: [:id, :name] ] },
          :revenue, :recently_funded
        )
      end

    end
  end
end
