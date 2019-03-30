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
    @deck = Deck.find(params[:id])
    render json: @deck
  end

  def create
    @deck = Deck.new(name: deck_params["name"], user_id: current_user.id)
    if current_user
      @deck.save
    end
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

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    render json: "Succesfully Deleted!"
  end

  private

  def deck_params
    params.require(:deck).permit(:name)
  end

  def privacy_params
    params.require(:deck).permit(:private)
  end

end
