module V1
  module User
    class CompaniesController < ApplicationController
      before_action :authenticate

      def create
        company = Company.new(company_params)
        company.user_id = current_user.id
        company.save

        render json: company
      end

      def index
        if params[:filter].present?
          companies = Company.unclaimed_or_owned_by(current_user.id).select(:id, :name).where("name ILIKE ?", "%#{params[:filter]}%")
        else
          companies = Company.unclaimed_or_owned_by(current_user.id).with_deleted.order(:id)
        end

        companies.each {|company| company.current_user = current_user} if current_user

        respond_to do |format|
          format.html {
            render json: companies
          }
          format.csv do
            send_data companies.to_csv
          end
        end
      end

      def show
        render json: company
      end

      def update
        company.update(company_params)
        render json: company
      end

      private

      def company
        Company.where(user_id: current_user.id, id: params[:id]).first
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
