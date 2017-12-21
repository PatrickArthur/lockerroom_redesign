Rails.application.routes.draw do
  resources :posts

  devise_for :users

  root 'profiles#index'

  resources :profiles


end
