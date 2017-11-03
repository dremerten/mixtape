class Api::AlbumsController < ApplicationController
  def index

    if params[:order] == 'recent'
      @albums = Album.new_releases.includes(:tracks, :artist)
    else
      @albums = Album.includes(:tracks, :artist).all
    end
  end

  def show
    @album = Album.find(params[:id])
  end
end
