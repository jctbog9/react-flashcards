class Api::V1::FlashcardsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    if current_user
      render json: current_user.flashcards
    else
      render json: Flashcard.all
    end
  end

  def show
    render json: Flashcard.find(params[:id])
  end

  def create
    Flashcard.create!(front: flashcard_params["front"], back: flashcard_params["back"], deck_id: flashcard_params["deck_id"])
  end

  private

  def flashcard_params
    params.require(:flashcard).permit(:front, :back, :deck_id)
  end
end
