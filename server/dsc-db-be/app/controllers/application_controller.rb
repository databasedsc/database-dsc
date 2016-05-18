class ApplicationController < ActionController::API
  include ActionController::MimeResponds
  include Knock::Authenticatable
end
