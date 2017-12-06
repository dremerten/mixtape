class Api::TracksController < ApplicationController
  def index
    @tracks = Track.includes(:album, :artist).all
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])

    if @track.update(track_params)
      render json: ["Track successful saved!"]
    else
      render json: ["You cannot save this track twice"]
    end
  end

  def create_track_save
    current_user.save_track(params[:id])
  end

  def remove_track_save

  end

  private

  def track_params
    params.require(:track).permit(user_add_ids: [])
  end
end
