class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def follow
    followable_type = get_class_string
    followable_id = params[:followable_id]

    @follow = Follow.new(
      user_id: current_user.id,
      followable_type: followable_type,
      followable_id: followable_id
    )

    if @follow.save
      # render json: { followableId: follow.followable_id, followableType: follow.followable_type }
      render partial: 'api/follows/follow'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    followable_type = get_class_string
    followable_id = params[:followable_id]

    @follow = Follow.find_by(
      user_id: current_user.id,
      followable_type: followable_type,
      followable_id: followable_id
    )

    if @follow
      @follow.destroy
      render partial: 'api/follows/follow'
    else
      render json: ['An error occued'], status: 422
    end
  end

  private

  def get_class_string
    self.class.to_s.match(/^Api::(.+)sController$/)[1]
  end
end
