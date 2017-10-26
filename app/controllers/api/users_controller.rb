class Api::UsersController < ApplicationController
  def create
    debugger
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = current_user
    if @user
      current_user.destroy
      render json: {}
    else
      render json: ["Invalid request"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :birthday, :password_confirmation, :avatar)
  end
end
