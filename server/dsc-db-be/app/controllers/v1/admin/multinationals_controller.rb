module V1
  module Admin
    class MultinationalsController < ApplicationController

      def create
        multinational = Multinational.create(multinational_params)

        render json: multinational
      end

      def index
        multinationals = Multinational.with_deleted.order(:id)

        render json: multinationals
      end

      def show
        render json: multinational
      end

      def update
        multinational.update(multinational_params)

        render json: multinational
      end

      def destroy
        multinational.destroy

        render status: 204
      end

      def restore
        Multinational.restore(params[:id])
      end
      #
      private

      def multinational
        Multinational.find(params[:id])
      end

      def multinational_params
        params.require(:multinational).permit(
          :name,
          :logo,
          :short_description,
          :long_description,
          :headquarters,
          :emea_hq,
          :functions,
          :events_space,
          :events_space_qualifier,
          :next_event,
          :employees,
          :local_office,
          :video_url,
          :website,
          :events_space_qualifiers,
          :custom_field_1, :custom_field_2, :custom_field_3, :custom_field_4,
          functions: [],
          categories: [],
          startup_packages: [:name, :link, :description],
          social_accounts: [:twitter, :linkedin, :facebook]
        )
      end

    end
  end
end
