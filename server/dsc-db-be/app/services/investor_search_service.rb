class InvestorSearchService

  def initialize(params)
    @params = params
  end

  def call
    if @params[:searchText].present?
      investors = Investor.search(@params[:searchText])
    elsif @params[:tag].present?
      investors = Investor.search_by_tag(@params[:tag])
    else
      investors = Investor.all
    end

    investors = investors.funding_types(@params[:fundingTypes]) if @params[:fundingTypes].present?
    investors = investors.select_numeric_scope('investment_size', @params[:investmentSize]) if @params[:investmentSize]
    investors = investors.deal_structure(@params[:dealStructure]) if @params[:dealStructure].present?

    investors
  end

end
