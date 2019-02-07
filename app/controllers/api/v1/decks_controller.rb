class Api::V1::DecksController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    if current_user
      render json: current_user.decks
    else
      render json: Deck.where(private: false)
    end
  end

  def show
    render json: Deck.find(params[:id])
  end

  def create
    Deck.create!(name: deck_params["name"], user_id: current_user.id)
    render json: "Deck successfully created"
  end

  def update
    @deck = Deck.find(params[:id])
    if @deck
      @deck["private"] = params[:private]
      @deck.save
    end
    render json: @deck
  end

  private

  def deck_params
    params.require(:deck).permit(:name)
  end

  def privacy_params
    params.require(:deck).permit(:private)
  end
end
