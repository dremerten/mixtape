class Api::TracksController < ApplicationController
  def index
    if params[:playlistId]
      @tracks = Playlist.find(params[:playlistId]).tracks.includes(:album)
    else
      @tracks = Track.includes(:album).all
    end
  end

  def show
    @track = Track.find(params[:id])
  end
end
