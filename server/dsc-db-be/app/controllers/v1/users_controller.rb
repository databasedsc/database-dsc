class V1::UsersController < ApplicationController
  def create
    # create the new user instance
    user = User.create(user_params)
    # check the user save ok
    if user.persisted?
      # use the Knock AuthToken model to create a token for us
      render json: { jwt: auth_token(user).token }, status: 201
    else
      # bad request
      render json: user, status: 400
    end
  end

private

  def auth_token(user)
    Knock::AuthToken.new payload: { sub: user.id }
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
