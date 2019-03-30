class Api::V1::StarsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    @stars = Star.all
    render json: @stars
  end

  def show
    @star = Star.find(params[:id])
    render json: @star
  end

  def create
    @star = Star.new(user_id: current_user.id, deck_id: star_params[:deck_id])
    @star.save
    render json: "Successfully starred deck!"
  end

  def destroy
    @star = Star.where(user_id: current_user.id, deck_id: params[:id])[0]
    @star.destroy
    render json: "Succesfully Deleted!"
  end

  private

  def star_params
    params.require("star").permit(:deck_id)
  end

end
