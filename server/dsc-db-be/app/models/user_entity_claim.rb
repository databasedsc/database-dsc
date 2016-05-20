class UserEntityClaim < ActiveRecord::Base
  enum entity_type: [:company, :investor, :hub, :multinational]
  belongs_to :user
end
