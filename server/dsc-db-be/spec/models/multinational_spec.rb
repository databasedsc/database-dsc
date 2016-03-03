# == Schema Information
#
# Table name: multinationals
#
#  id                :integer          not null, primary key
#  name              :string
#  logo              :string
#  short_description :text
#  headquarters      :string
#  local_office      :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  emea_hq           :boolean          default(FALSE)
#  startup_packages  :text             default([]), is an Array
#  employees         :integer
#  events_space      :boolean          default(FALSE)
#  functions         :text             default([]), is an Array
#

require 'rails_helper'

RSpec.describe Multinational, :type => :model do
  [
    :name, :logo, :short_description, :headquarters, :local_office, :emea_hq, :startup_packages, :employees,
    :events_space, :functions
  ].each do |column|
    it { should have_db_column(column) }
  end

  describe '#startup_packages' do

    context 'filtering by mtns without startup packages' do
      it 'should call empty_startup_package scope' do
        expect(described_class).to receive(:empty_startup_packages)
        expect(described_class).not_to receive(:have_startup_packages)

        described_class.startup_packages(false)
      end
    end

    context 'filterting by mtns with startup packages' do
      it 'should call have_startup_package scope' do
        expect(described_class).to receive(:have_startup_packages)
        expect(described_class).not_to receive(:empty_startup_packages)

        described_class.startup_packages(true)
      end
    end
  end
end
