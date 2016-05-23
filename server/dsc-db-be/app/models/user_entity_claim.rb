class UserEntityClaim < ActiveRecord::Base
  enum entity_type: [:company, :investor, :hub, :multinational]
  belongs_to :user

  def as_json(options = { })
    super((options || { }).merge({
        :methods => [:user_requesting, :entity]
    }))
  end

  def user_requesting
    self.user
  end

  def entity
    case self.entity_type
    when 'company'
      Company.find(self.entity_id)
    when 'investor'
      Investor.find(self.entity_id)
    when 'hub'
      Hub.find(self.entity_id)
    when 'multinational'
      Multinational.find(self.entity_id)
    else
      "Unknown"
    end
  end

  def allocate_to_user!
    entity.update_attributes(user_id: self.user_id)
    self.destroy
  end

  def deny_from_user!
    self.destroy
  end
end
