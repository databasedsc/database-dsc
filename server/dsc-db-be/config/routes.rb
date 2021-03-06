Rails.application.routes.draw do



  root to: 'health#index'

  namespace :v1 do
    post '/auth/:provider',      to: 'auth#authenticate'

    mount Knock::Engine => "/knock"

    get 'companies', to: 'companies#index'
    get 'companies/:id', to: 'companies#show'
    get 'multinationals', to: 'multinationals#index'
    get 'multinationals/:id', to: 'multinationals#show'
    get 'investors', to: 'investors#index'
    get 'investors/:id', to: 'investors#show'
    get 'hubs', to: 'hubs#index'
    get 'hubs/:id', to: 'hubs#show'

    resources :password_resets, only: [:new, :create, :edit, :update]

    # Administration Routes
    namespace :admin do
      resources :user_entity_claims, only: [:index, :update]

      resources :companies, only: [:create, :index, :show, :update, :destroy] do
        member do
          put :restore
        end
      end
      resources :multinationals, only: [:create, :index, :show, :update, :destroy] do
        member do
          put :restore
        end
      end
      resources :investors, only: [:create, :index, :show, :update, :destroy] do
        member do
          put :restore
        end
      end
      resources :hubs, only: [:create, :index, :show, :update, :destroy] do
        member do
          put :restore
        end
      end
      resources :tags, only: [:index]
    end

    # User routes
    resources :users, only: [:create, :show, :update] do
    end

    namespace :user do
      resources :user_entity_claims, only: [:create, :update]

      resources :companies, only: [:create, :index, :show, :update, :destroy] do
        member do
          put :restore
        end
      end
      resources :multinationals, only: [:create, :index, :show, :update, :destroy] do
        member do
          put :restore
        end
      end
      resources :investors, only: [:create, :index, :show, :update, :destroy] do
        member do
          put :restore
        end
      end
      resources :hubs, only: [:create, :index, :show, :update, :destroy] do
        member do
          put :restore
        end
      end
    end
  end
end
