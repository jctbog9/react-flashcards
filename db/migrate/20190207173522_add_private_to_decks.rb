class AddPrivateToDecks < ActiveRecord::Migration[5.2]
  def up
    add_column :decks, :private, :boolean, default: false
  end

  def down
    remove_column :decks, :private
  end
end
