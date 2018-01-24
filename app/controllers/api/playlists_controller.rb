class Api::PlaylistsController < ApplicationController

  # TODO: Make featured playlists and user playlists different routes
  
  def index
    playlists = (is_featured ? Playlist.featured : Playlist.for current_user)

    @playlists = playlists
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
    @playlist = Playlist.includes(tracks: [:album, :artist]).find(params[:id])

    if @playlist
      render :show
    else
      render json: ["This playlist doesn't seem to exists"], status: 404
    end
  end

  def update
    @playlist = current_user.playlists.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    playlist = current_user.playlists.find(params[:id])

    if playlist
      playlist.destroy
      render json: {}
    else
      render json: ['Playlist does not exist'], status: 404
    end
  end

  def add_track
    @playlist = current_user.playlists.find(params[:id])
    @track_id = params[:trackId]

    if @playlist.add_track(@track_id)
      render :add_track
      # render json: {
      #   message: ['Song successfully added!'],
      #   data: {
      #     playlistId: @playlist.id,
      #     trackId: params[:trackId],
      #     imageUrl: @playlist.image(:small)
      #    }
      # }
    else
      render json: ['An error occured with your request'], status: 422
    end
  end

  def remove_track
    playlist = current_user.playlists.find(params[:id])

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
