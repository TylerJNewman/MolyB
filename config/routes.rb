Rails.application.routes.draw do
  root 'pages#home'

  namespace :api, defaults: { format: :json } do
    resources :notes, except: [:new]
    resources :tags, only: [:index, :create, :update, :destroy]
    resources :notebooks, except: [:new]
  end

end
