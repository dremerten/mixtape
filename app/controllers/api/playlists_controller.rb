class Api::PlaylistsController < ApplicationController

  def index
    playlists = (is_featured ? Playlist.includes(:author).featured : Playlist.includes(:author).user_playlists(current_user))

    @playlists = playlists.includes(:author)
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 500
    end
  end

  def show
    @playlist = Playlist.includes(tracks: [:album, :artist]).find(params[:id])
  end

  def update
    @playlist = Playlist.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    playlist = Playlist.find(params[:id])

    if playlist
      playlist.destroy
      render json: {}
    else
      render json: ['Playlist does not exist']
    end
  end

  def add_track
    @playlist = Playlist.find(params[:id])

    if @playlist.add_track(params[:trackId])
      render json: ['Song successfully added!']
    else
      render json: ['An error occured with your request']
    end
  end

  def remove_track
    playlist = Playlist.find(params[:id])

    playlist.remove_track(params[:trackId])
  end

  private

  def is_featured
    params[:type] == 'featured'
  end

  def playlist_params
    params.require(:playlist).permit(:name)
  end
end
