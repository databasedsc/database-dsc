module V1
  module Admin
    class UserEntityClaimsController < ApplicationController
      before_action :authenticate
      # before_action :is_user_admin

      def index
        user_entity_claims = UserEntityClaim.all

        render json: user_entity_claims
      end
    end
  end
end
