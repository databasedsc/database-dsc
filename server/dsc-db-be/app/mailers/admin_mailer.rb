class AdminMailer < ApplicationMailer

  def claim_notification(user_claim)
    @user_claim = user_claim
    mail(to: ENV['CLAIM_MAIL_TO'], subject: '👋 New Claim Request')
  end

end
