Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
  namespace :v1 do
    mount Knock::Engine => '/knock'

    get 'companies', to: 'companies#index'
    get 'companies/:id', to: 'companies#show'
    get 'multinationals', to: 'multinationals#index'
    get 'multinationals/:id', to: 'multinationals#show'
    get 'investors', to: 'investors#index'
    get 'investors/:id', to: 'investors#show'
    get 'hubs', to: 'hubs#index'
    get 'hubs/:id', to: 'hubs#show'

    namespace :admin do
      resource :companies, only: [:create]
    end
  end
end
