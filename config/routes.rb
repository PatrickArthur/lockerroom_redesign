Rails.application.routes.draw do
  resources :posts

  devise_for :users

  resources :users, only: [:index]

  root 'users#index'

  resources :profiles

  resources :conversations, only: [:index, :create, :show] do
    member do
      post :close
    end
    resources :messages, only: [:create]
  end
end
