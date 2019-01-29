require 'rails_helper'

feature 'user visits edit flashcards page', %Q{
  As a user
  I want to edit flashcards
  So that I can create a new study material
} do

  scenario 'clicks edit flashcards button on top bar' do
    visit edit_flashcards_path

    expect(page).to have_content('Decks:')
  end
end
