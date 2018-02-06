class Api::ArtistsController < ApplicationController
  include FollowActions
  
  def index
    @artists = current_user.followed_artists
  end

  def show
    @artist = Artist.includes(:tracks, albums: [:tracks]).find(params[:id])
  end
end
