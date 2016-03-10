# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  first_name      :string
#  last_name       :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

describe User, type: :model do

  [:id, :email, :first_name, :last_name, :password_digest].each do |column|
    it { should have_db_column(column) }
  end

  describe 'Validations' do
    context 'on a new user' do
      it 'should not be valid without a password' do
        user = User.new password: nil, password_confirmation: nil
        expect(user).to_not be_valid
      end

      it 'should not be valid with a confirmation mismatch' do
        user = User.new password: 'short', password_confirmation: 'long'
        expect(user).to_not be_valid
      end
    end

    context 'on an existing user' do
      let(:user) do
        u = User.create password: 'password', password_confirmation: 'password'
        User.find u.id
      end

      it 'should be valid with no changes' do
        expect(user).to be_valid
      end

      it 'should be valid with a new (valid) password' do
        user.password = user.password_confirmation = 'new password'
        expect(user).to be_valid
      end
    end
  end
end
