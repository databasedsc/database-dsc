class AdminMailer < ApplicationMailer

  def claim_notification(user_claim)
    @user_claim = user_claim
    mail(to: 'steve@minicorp.ie', subject: '👋 New Claim Request')
  end

end
