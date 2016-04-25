# == Schema Information
#
# Table name: companies
#
#  id                    :integer          not null, primary key
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  name                  :string
#  logo                  :string
#  short_description     :text
#  headquarters          :string
#  formerly_known_as     :string
#  founders              :text
#  tags            :text
#  investors             :text
#  office_locations      :text
#  incubator             :string
#  employees             :integer
#  funding_stage         :string
#  funding_amount        :integer
#  product_stage         :string
#  target_markets        :string
#  business_model        :string
#  company_stage         :string
#  operational_status    :string
#  funding_rounds        :jsonb
#  looking_for           :text
#  government_assistance :string
#  contact               :text
#  long_description      :text
#  founded               :string
#  acquisitions          :text
#  video_url             :text
#  website               :string
#  social_accounts       :jsonb
#  deleted_at            :datetime
#

require 'rails_helper'

RSpec.describe Company, :type => :model do
  [
    :name, :logo, :acquisitions, :founded,  :short_description,:long_description, :headquarters, :formerly_known_as,
    :founders, :tags, :investors, :office_locations, :incubator, :employees, :funding_stage, :funding_amount,
    :product_stage, :target_markets, :business_model, :contact, :company_stage, :operational_status, :government_assistance,
    :looking_for, :funding_rounds
  ].each do |column|
    it { should have_db_column(column) }
  end

  describe '#select_numeric_scope | employee' do
    context 'given >500' do
      it 'should call the #employees_greater_than_500 scope' do
        expect(Company).to receive(:greater_than).with('employees', 500)
        expect(Company).not_to receive(:range_scope)
        Company.select_numeric_scope('employees', '>500')
      end
    end

    context 'given 101-250' do
      it 'should call the #employees(range) scope' do
        expect(Company).to receive(:range_scope).with('employees', 101..250)
        expect(Company).not_to receive(:greater_than)
        Company.select_numeric_scope('employees', '101-250')
      end
    end
  end

  describe '#select_numeric_scope | funding_amount' do

    context 'given 100m' do
      it 'should call the #funding_amount_greater_than_100m scope' do
        expect(Company).to receive(:greater_than).with('funding_amount', 100000000)
        expect(Company).not_to receive(:range_scope)
        Company.select_numeric_scope('funding_amount', '>100m')
      end
    end

    context 'given 101-250' do
      it 'should call the #funding_amount(range) scope' do
        expect(Company).to receive(:range_scope).with('funding_amount', 101..250)
        expect(Company).not_to receive(:greater_than)
        Company.select_numeric_scope('funding_amount', '101-250')
      end
    end
  end
end
