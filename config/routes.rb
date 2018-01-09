Rails.application.routes.draw do
  resources :posts

  devise_for :users

  root 'profiles#index'

  resources :profiles

  resources :conversations, only: [:create] do
    member do
      post :close
    end
    resources :messages, only: [:create]
  end
end
