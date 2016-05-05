module V1
  module Admin
    class TagsController < ApplicationController

      def index
        tags = Tag.where("name ILIKE ?", "%#{params[:filter]}%")
        render json: tags.pluck(:name)
      end

    end
  end
end
