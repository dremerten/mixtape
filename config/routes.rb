Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :tracks, only: [:index,:show]
    resources :users, only: [:show, :new, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :searches, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
