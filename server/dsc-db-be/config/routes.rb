Rails.application.routes.draw do
  namespace :v1 do
    get 'multinationals/index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
    namespace :v1 do
      get 'companies', to: 'companies#index'
      get 'companies/:id', to: 'companies#show'
      get 'multinationals', to: 'multinationals#index'
      get 'investors', to: 'investors#index'
      get 'investors/:id', to: 'investors#show'
      get 'hubs', to: 'hubs#index'
    end
end
