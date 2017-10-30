class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.includes(:tracks).all
  end

  def show
    @album = Album.find(params[:id])
  end
end
