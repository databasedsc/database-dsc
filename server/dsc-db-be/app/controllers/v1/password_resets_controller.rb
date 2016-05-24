class V1::PasswordResetsController < ApplicationController
  before_action :get_user,   only: [:edit, :update]
  before_action :valid_user, only: [:edit, :update]
  before_action :check_expiration, only: [:edit, :update]

  def create
    @user = User.find_by(email: params[:password_reset][:email].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      # report success
      render json: :nothing, status: 201
    else
      # report resource not found
      render json: { message: 'Email address not found' }, status: 404
    end
  end

  def update
    if params[:user][:password].empty?
      render json: { errors: ["Password is required."] }, status: 400
    elsif @user.update_attributes(user_params)
      render json: :nothing, status: 200
    else
      render json: { errors: ["There was a problem resetting your password."] }, status: 400
    end
  end

private

  def user_params
    params.require(:user).permit(:password)
  end

  def get_user
    @user = User.find_by(email: params[:password_reset][:email])
  end

  # Confirms a valid user.
  def valid_user
    unless (@user &&
            @user.authenticated?(:reset, params[:id]))
      render json: :nothing, status: 400
    end
  end

  # Checks expiration of reset token.
  def check_expiration
    if @user.password_reset_expired?
      flash[:danger] = "Password reset has expired."
      redirect_to new_password_reset_url
    end
  end
end
