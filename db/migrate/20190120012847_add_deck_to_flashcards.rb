class AddDeckToFlashcards < ActiveRecord::Migration[5.2]
  def up
    add_reference :flashcards, :deck, index: true
  end

  def down
    remove_reference :flashcards, :deck
  end
end
