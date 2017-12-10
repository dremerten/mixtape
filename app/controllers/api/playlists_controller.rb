class Api::PlaylistsController < ApplicationController

  def index
    playlists = (is_featured ? Playlist.featured : Playlist.user_playlists(current_user))

    @playlists = playlists
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
    @playlist = Playlist.includes(tracks: [:album, :artist]).find(params[:id])
  end

  def update
    @playlist = Playlist.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages
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
    playlist = Playlist.find(params[:id])

    playlist.add_track(params[:trackId])
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
    params.require(:playlist).permit(:name, :author_id)
  end
end
