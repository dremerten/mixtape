class Api::TracksController < ApplicationController
  def index
    @tracks = current_user.tracks.includes(:album, :artist)
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])

    if @track.update(track_params)
      render json: ["Track successfully saved!"]
    else
      render json: ["You cannot save this track twice"]
    end
  end

  def create_track_save
    if current_user.track_ids.include?(params[:id].to_i)
      render json: ["You have already saved this track"], status: 422
    else
      current_user.save_track(params[:id])
      render json: { message: ["Track successfully added"], data: params[:id] }
    end
  end

  def remove_track_save
    if current_user.track_ids.include?(params[:id].to_i)
      current_user.remove_track(params[:id])
      render json: { message: ["Track successfully removed"], data: params[:id] }
    else
      render json: { message: ["You don't own this track"] }, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(user_add_ids: [])
  end
end
