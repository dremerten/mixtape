class Api::TracksController < ApplicationController
  def index
    @tracks = Track.includes(:album, :artist).all
  end

  def show
    @track = Track.find(params[:id])
  end
end
