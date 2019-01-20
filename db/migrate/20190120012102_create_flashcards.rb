class CreateFlashcards < ActiveRecord::Migration[5.2]
  def change
    create_table :flashcards do |t|
      t.string :front, null: false
      t.string :back, null: false

      t.timestamps null: false
    end
  end
end
