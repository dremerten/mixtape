class Api::SearchesController < ApplicationController

  def index
    @tracks = Track.joins(:artist, :album)
                   .where('lower(tracks.title) ~* :query or
                           lower(artists.name) ~* :query or
                           lower(albums.title) ~* :query',
                           query: make_query)
                   .limit(20)
                   .order(popularity: 'desc')

    @artists = Artist.where('lower(name) ~* ?', make_query).limit(20)

    @albums = Album.joins(:artist)
                   .where('lower(title) ~* :query or
                           lower(artists.name) ~* :query',
                           query: make_query)
                   .limit(20)

    @playlists = Playlist.joins(tracks: [:artist])
                         .where('lower(playlists.name) ~* :query or
                                 lower(tracks.title) ~* :query or
                                 lower(artists.name) ~* :query',
                                 query: make_query).limit(20)
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

#
