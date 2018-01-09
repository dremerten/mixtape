class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.includes(:albums).find(params[:id])
  end
end
