class Api::SearchesController < ApplicationController

  def index
    if params[:query].empty?
      render json: ['An error occured with your search'], status: 422
    end

    @tracks = Track.search(make_query)

    @artists = Artist.search(make_query)

    @albums = Album.search(make_query)

    @playlists = Playlist.search(make_query)
  end


  def create
    @search = current_user.searches.new(query: params[:query])

    if @search.save
      render :show
    else
      render json: ['An error occured with your search request'], status: 500
    end
  end

  private

  def make_query
    "^#{params[:query].downcase}|\\s#{params[:query].downcase}"
  end
end
