module V1
  module User
    class CompaniesController < ApplicationController
      before_action :authenticate

      def index
        if params[:filter].present?
          companies = Company.unclaimed_or_owned_by(current_user.id).select(:id, :name).where("name ILIKE ?", "%#{params[:filter]}%")
        else
          companies = Company.unclaimed_or_owned_by(current_user.id).with_deleted.order(:id)
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

    end
  end
end
