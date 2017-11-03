class Api::PlaylistTracksController < ApplicationController

  def create
    @playlist_track = PlaylistTrack.new(playlist_track_params)

    if @playlist_track.save
      render json: ['Song added!']
    else
      render json: ['Your song could not be added']
    end
  end

  def destroy
  end

  private

  def playlist_track_params
    params.require(:playlist_track).permit(:track_id, :playlist_id)
  end
end
