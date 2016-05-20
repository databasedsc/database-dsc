module V1
  module User
    class UserEntityClaimsController < ApplicationController
      before_action :authenticate

      def create
        user_entity_claim = UserEntityClaim.where(
          user_id: current_user.id,
          entity_type: UserEntityClaim.entity_types[params[:user_entity_claim][:entity_type]],
          entity_id: params[:user_entity_claim][:entity_id]
        ).first_or_create(
          user_id: current_user.id,
          entity_type: UserEntityClaim.entity_types[params[:user_entity_claim][:entity_type]],
          entity_id: params[:user_entity_claim][:entity_id]
        )

        AdminMailer.claim_notification(user_entity_claim).deliver_now!

        render json: :nothing, status: 201
      end
    end
  end
end
