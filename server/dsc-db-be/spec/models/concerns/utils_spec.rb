require 'rails_helper'

describe 'String.parse_units' do
  using Utils

  it 'should replace abbreviation with zeros' do
    expect('500m'.parse_units).to eq('500000000')
    expect('100k'.parse_units).to eq('100000')
  end
end
