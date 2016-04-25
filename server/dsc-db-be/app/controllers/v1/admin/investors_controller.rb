module V1
  module Admin
    class InvestorsController < ApplicationController

      def create
        investor = Investor.create(investor_params)
        render json: investor
      end

      def index
        investors = Investor.with_deleted.order(:id)
        render json: investors
      end

      def show
        render json: investor
      end

      def update
        investor.update(investor_params)
        render json: investor
      end

      def destroy
        investor.destroy
        render status: 204
      end

      def restore
        Investor.restore(params[:id])
      end

      private

      def investor
        Investor.find(params[:id])
      end

      def investor_params
        params.require(:investor).permit(
          :name, :logo, :short_description, :long_description, :video_url,
          :exits_ipos, :headquarters, :founded,
          :funds_raised, { funding_types: [] }, :investment_size, :regions,
          { office_locations: [:address, :lat, :lng] }, :contact, :contact_email, :preferred_contact,
          :co_investors, { board_members: [] }, :similar_investors, :similar_investors,
          { founders: [:name, :linkedin] }, :video_url, :website,
          :custom_field_1, :custom_field_2, :custom_field_3, :custom_field_4,
          { social_accounts: [:twitter, :linkedin, :facebook] }
        )
      end

    end
  end
end
