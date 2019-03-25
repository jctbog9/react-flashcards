Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :decks, only: [:index, :show, :create, :update, :destroy]
      resources :flashcards, only: [:index, :show, :create]
      resources :users, only: [:index, :show] do
        resources :follows, only: [:index, :create, :destroy]
      end
    end
  end

  get '/decks/:id', to: "homes#index"
  get '/my-decks/:id/edit', to: "homes#index"
  get '/my-decks', to: "homes#index"
  get '/new-deck', to: "homes#index"
  get '/profiles/:id', to: "homes#index"
  get '/profiles/:id/stats', to: "homes#index"
end
