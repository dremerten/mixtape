class Api::PlaylistsController < ApplicationController

  def index
    playlists = featured ? Playlist.featured : Playlist.all

    if params[:genre]
      genres = Genre.where(name: params[:genre]).map(:name)
      playlists = playlists.where('? IN ?', params[:genre], genres)
    end

    @playlists = playlists.includes(:tracks)
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def updated
    @playlist = Playlist.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])

    if @playlist
      @playlist.destroy
      render json: {}
    else
      render json: ['Playlist does not exist']
    end
  end

  private

  def featured
    params[:featured]
  end

  def playlist_params
    params.require(:playlist).permit(:name, :author_id)
  end
end
