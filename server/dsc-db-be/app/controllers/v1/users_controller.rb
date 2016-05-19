class V1::UsersController < ApplicationController
  before_action :authenticate, only: [:show]
  before_action :is_user, only: [:show, :update]
  before_action :set_user, only: [:show, :update]

  def create
    # create the new user instance
    user = User.create(user_params)
    # check the user save ok
    if user.persisted?
      # use the Knock AuthToken model to create a token for us
      render json: { jwt: auth_token(user).token, user: UserSerializer.new(user) }, status: 201
    else
      # bad request
      render json: user, status: 400
    end
  end

  def show
    render json: UserSerializer.new(@user), root: false, status: 200
  end

  def update
    if @user.update_attributes(user_params)
      render json: UserSerializer.new(@user), root: false, status: 200
    else
      # bad request
      render json: :nothing, status: 400
    end
  end

  def is_user
    if current_user.user_type != "user"
      render json: :nothing, status: 401
      return
    end
  end

private

  def set_user
    @user = User.find(params[:id])
  end

  def auth_token(user)
    Knock::AuthToken.new payload: { sub: user.id }
  end

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :email, :password)
  end

end
