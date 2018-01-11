class Api::ArtistsController < ApplicationController
  def index
    @artists = currentUser.followed_items.where(followable_type: 'Artist')
  end

  def show
    @artist = Artist.includes(:albums, :tracks).find(params[:id])
  end
end
