Rails.application.routes.draw do
  root 'pages#home'

  resource :session, :only => [:new, :create, :destroy]
  resources :users, :only => [:new, :create, :show, :index]

  namespace :api, defaults: { format: :json } do
    resources :notes, except: [:new]
    resources :tags, only: [:index, :create, :update, :destroy]
    resources :notebooks, except: [:new]
  end

end
