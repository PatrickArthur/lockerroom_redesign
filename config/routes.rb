Rails.application.routes.draw do
  resources :posts

  devise_for :users
  root 'profiles#index'
  get '/users/:id' => 'page#profile'


end
