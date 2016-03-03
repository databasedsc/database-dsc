require 'rails_helper'

RSpec.describe Investor, :type => :model do
  [
    :name, :logo, :headquarters, :founders, :short_description, :local_office, :tags, :office_locations,
    :funding_types, :investment_size, :deal_structure
  ].each do |column|
    it { should have_db_column(column) }
  end

  describe '#select_numeric_scope' do
    context 'given >100000000' do
      it 'should call greater than' do
        expect(described_class).to receive(:greater_than).with('investment_size', 50000000)
        expect(described_class).not_to receive(:range_scope)

        described_class.select_numeric_scope('investment_size', '50000000-100000000')
      end
    end

    context 'given 10000000-20000000' do
      it 'should call the range_scope for investment size' do
        expect(described_class).to receive(:range_scope).with('investment_size', 10000000..20000000)
        expect(described_class).not_to receive(:greater_than)

        described_class.select_numeric_scope('investment_size', '10000000-20000000')
      end
    end
  end
end
