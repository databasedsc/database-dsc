module V1
  module Admin
    class CompaniesController < ApplicationController
      before_action :authenticate
      before_action :is_user_admin

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

      def destroy
        company.destroy
        render json: :nothing, status: 204
      end

      def restore
        Company.restore(params[:id])
      end

      def is_user_admin
        puts request.headers["Authorization"]
        puts Knock::AuthToken.new(token: request.headers["Authorization"].to_s.sub("Bearer ", "")).as_json
        puts current_user.as_json
        if current_user.user_type != "admin"
          render json: :nothing, status: 401
          return
        end
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
