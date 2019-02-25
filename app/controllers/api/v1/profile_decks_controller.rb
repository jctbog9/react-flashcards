class Api::V1::ProfileDecksController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    @user = User.find(params[:user_id])
    @decks = @user.decks
    render json: @decks
  end

end
