module FollowActions
  extend ActiveSupport::Concern

  def followed_items
    @followed_items = User.includes(:follows).find(params[:id])
                          .send("followed_#{get_controller_name}")

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

  def get_controller_name
    params['controller'].split('/')[1]
  end

  def get_class_string
    self.class.to_s.match(/^Api::(.+)sController$/)[1]
  end
end
