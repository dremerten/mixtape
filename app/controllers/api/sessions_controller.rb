class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      @track_ids = SavedTrack.joins(:user, :track).where('users.id': current_user.id).order(created_at: :desc).pluck(:track_id)

      render "api/users/current_user"
    else
      render json: ["Please enter a valid username and password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
