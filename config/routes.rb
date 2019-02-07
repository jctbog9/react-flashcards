Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :decks, only: [:index, :show, :create, :update]
      resources :flashcards, only: [:index, :show, :create]
    end
  end

  get '/decks/:id', to: "homes#index"
  get '/my-decks/:id/edit', to: "homes#index"
  get '/my-decks', to: "homes#index"
  get '/new-deck', to: "homes#index"
end
