class V1::MultinationalsController < ApplicationController
  def index
    if params[:searchText]
      multinationals = Multinational.search(params[:searchText])
    else
      multinationals = Multinational.all
    end
    render json: multinationals, status: 200
  end
end
