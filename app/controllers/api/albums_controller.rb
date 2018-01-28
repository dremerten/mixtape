class Api::AlbumsController < ApplicationController
  def index

    if params[:order] == 'recent'
      @albums = Album.new_releases.includes(:tracks, :artist).where(album_type: "album")
    else
      @albums = Album.includes(:tracks, :artist).where(album_type: "album")
    end
  end

  def show
    @album = Album.includes(:artist, tracks: [:artist]).find(params[:id])
  end
end
