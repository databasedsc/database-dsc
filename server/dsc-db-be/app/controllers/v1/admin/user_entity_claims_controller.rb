module V1
  module Admin
    class UserEntityClaimsController < ApplicationController
      before_action :authenticate
      # before_action :is_user_admin

      def index
        user_entity_claims = UserEntityClaim.all

        render json: user_entity_claims
      end

      def update
        user_entity_claim = UserEntityClaim.find(params[:claim_id])

        case params[:status]
        when 'approved'
          user_entity_claim.allocate_to_user!
        when 'denied'
          user_entity_claim.deny_from_user!
        end
      end
    end
  end
end
