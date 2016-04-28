module V1
  module Admin
    class HubsController < ApplicationController

      def create
        hub = Hub.create(hub_params)
        render json: hub
      end

      def index
        hubs = Hub.with_deleted.order(:id)

        respond_to do |format|
          format.html {
            render json: hubs
          }
          format.csv do
            send_data hubs.to_csv
          end
        end
      end

      def show
        render json: hub
      end

      def update
        hub.update(hub_params)
        render json: hub
      end

      def destroy
        hub.destroy
        render status: 204
      end

      def restore
        Hub.restore(params[:id])
      end

      private

      def hub
        Hub.find(params[:id])
      end

      def hub_params
        params.require(:hub).permit(
          :name, :logo, :short_description, :long_description,
          :headquarters, :founded, :programs, { hub_type: [] },
          :application_deadline, :contact, :contact_detail,
          :address, { contact_urls: [:name, :email, :phone] }, { events: [] },
          { alumni: [:id, :name] }, :video_url, :website, :custom_field_1,
          :custom_field_2, :custom_field_3, :custom_field_4,
          { social_accounts: [:twitter, :linkedin, :facebook] },
          { tags: [] }, :funding_provided
        )
      end

    end
  end
end
