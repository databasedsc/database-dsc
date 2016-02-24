class CompanySearchService

  def initialize(params)
    @params = params
    set_geo_markets
  end

  def call
    if @params[:searchText].present?
      companies = Company.search(@params[:searchText])
    else
      companies = Company.all
    end

    matching_params.each do |key, value|
      companies = companies.public_send(key.underscore, value) if value.present?
    end

    numeric_params.each do |key, value|
      companies = companies.public_send(:select_numeric_scope, key.underscore, value) if value.present?
    end

    companies
  end

  private

  def matching_params
    @params.slice(:fundingStage, :productStage, :companyStage, :geographicalMarkets, :businessModel, :operationalStatus)
  end

  def numeric_params
    @params.slice(:employees, :fundingAmount)
  end

  def set_geo_markets
    @params[:geographicalMarkets] = JSON.parse(@params[:geographicalMarkets]).select { |k, v| v }.keys.join(' ') if @params[:geographicalMarkets]
  end
end
