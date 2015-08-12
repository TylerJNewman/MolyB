Rails.application.routes.draw do
  namespace :api do
    resources :note_tags
  end
  namespace :api do
    resources :notebooks
  end
  namespace :api do
    resources :notes
  end
  devise_for :users
  root 'pages#home'

  namespace :api, defaults: { format: :json } do
    resources :notes, except: [:new]
    resources :tags, only: [:index, :create, :update, :destroy]
    resources :notebooks, except: [:new]
  end

end
