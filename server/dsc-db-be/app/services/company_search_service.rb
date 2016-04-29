class CompanySearchService

  def initialize(params)
    @params = params
    set_target_markets
  end

  def call
    if @params[:searchText].present?
      companies = Company.search(@params[:searchText])
    elsif @params[:tag].present?
      companies = Company.search_by_tag(@params[:tag])
    elsif @params[:recently_funded].present?
      companies = Company.recently_funded
    elsif @params[:company_ids].present?
      companies = Company.withIds(@params[:company_ids].split(','))
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
    @params.slice(:fundingStage, :productStage, :companyStage, :targetMarkets, :businessModel, :operationalStatus)
  end

  def numeric_params
    @params.slice(:employees, :fundingAmount)
  end

  def set_target_markets
    @params[:targetMarkets] = JSON.parse(@params[:targetMarkets]).select { |k, v| v }.keys.join(' ') if @params[:targetMarkets]
  end
end
