class MultinationalSearchService

  def initialize(params)
    @params = params
  end

  def call
    if @params[:searchText].present?
      multinationals = Multinational.search(@params[:searchText])
    elsif @params[:tag].present?
      multinationals = Multinational.search_by_tag(@params[:tag])
    else
      multinationals = Multinational.all
    end

    multinationals = multinationals.emea_hq(@params[:emeaHq]) if !@params[:emeaHq].nil?
    multinationals = multinationals.startup_packages(@params[:startupPackages]) if !@params[:startupPackages].nil?
    multinationals = multinationals.select_numeric_scope('employees', @params[:employees]) if @params[:employees]
    multinationals = multinationals.events_space(@params[:eventsSpace]) if !@params[:eventsSpace].nil?
    multinationals = multinationals.functions(@params[:functions]) if @params[:functions].present?

    multinationals
  end

end
