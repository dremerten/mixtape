Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :tracks, only: [:index,:show]
    resources :users, only: [:show, :new, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :searches, only: [:index]
    resources :saved_tracks, only: [:create, :destroy]

    post 'tracks/:id/save', to: 'tracks#create_track_save'
    delete 'tracks/:id/save', to: 'tracks#remove_track_save'

    post 'playlists/:id/tracks', to: 'playlists#add_track'
    delete 'playlists/:id/tracks', to: 'playlists#remove_track'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
