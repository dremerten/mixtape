class Api::SearchesController < ApplicationController

  def index
    if params[:query].empty?
      render json: ['An error occured with your search'], status: 422
    end

    @tracks = Track.search(build_query)

    @artists = Artist.search(build_query)

    @albums = Album.search(build_query)

    @playlists = Playlist.search(build_query)

    @users = User.search(build_query)

    @top_result = sort_by_match_weight([*@albums, *@artists, *@tracks, *@playlists, *@users], build_query).first
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

  def build_query
    "^#{params[:query].downcase}|\\s#{params[:query].downcase}"
  end

  def sort_by_match_weight(objects, query)
    create_match_weight_hash(objects, query)
      .sort_by { |k, v| v }
      .reverse
      .map { |pair| pair[0] }
  end

  def create_match_weight_hash(objects, query)
    weight_map = {}

    objects.each do |obj|
      weight_map[obj] = obj.match_weight(query) || 0
    end

    weight_map
  end
end
