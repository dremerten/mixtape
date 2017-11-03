class Api::SearchesController < ApplicationController

  def index
    @tracks = Track.joins(:artist, :album)
                   .where('lower(tracks.title) ~* :query or lower(artists.name) ~* :query', query: make_query)
                   .limit(20)

    @artists = Artist.where('lower(name) ~* ?', make_query).limit(20)

    @albums = Album.includes(:artist)
                   .where('lower(title) ~* ?', make_query)
                   .limit(20)

    @playlists = Playlist.joins(tracks: [:artist])
                         .where('lower(playlists.name) ~* :query or
                                 lower(tracks.title) ~* :query or
                                 lower(artists.name) ~* :query',
                                 query: make_query).limit(20)

    @most_popular_tracks = @tracks.order(popularity: 'desc').limit(5).map(&:id)

    if [*@tracks, *@artists, *@albums, *@playlists].empty?
      render json: ['Your search returned no results'], status: 422
    else
      render :index
    end
  end

  def make_query
    "^#{params[:query].downcase}|\\s#{params[:query].downcase}"
  end
end

#
