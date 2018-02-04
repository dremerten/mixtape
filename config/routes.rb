Rails.application.routes.draw do
  root 'static_pages#root'

  # Handle repetitive routes for polymorphic actions

  [:users, :playlists, :albums, :artists].each do |m|
    post "#{m}/:followable_id/follow", to: "api/#{m}#follow", defaults: { format: :json }
    delete "#{m}/:followable_id/follow", to: "api/#{m}#unfollow", defaults: { format: :json }

    get "users/:id/follows/#{m}", to: "api/#{m}#followed_items", defaults: { format: :json }
  end

  namespace :api, defaults: { format: :json } do
    resources :tracks, only: [:index,:show]
    resources :users, except: [:index, :update]
    resource :session, only: [:create, :destroy]
    resources :playlists, except: [:new]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :searches, only: [:index]
    resources :saved_tracks, only: [:create, :destroy]

    get 'user/artists', to: 'artists#index'
    post 'tracks/:id/save', to: 'tracks#create_track_save'
    delete 'tracks/:id/save', to: 'tracks#remove_track_save'
    post 'playlists/:id/tracks', to: 'playlists#add_track'
    delete 'playlists/:id/tracks', to: 'playlists#remove_track'

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
