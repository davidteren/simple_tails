Rails.application.routes.draw do
  devise_for :users
  resources :posts
  get 'home/index'
  root 'home#index'

  # devise_scope :user do
  #   get "/users/sign_out", as: "sign_out", to: "devise/sessions#destroy"
  # end

end
