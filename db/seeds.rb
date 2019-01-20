# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: '1234@gmail.com', password: '123456')

Deck.create!(name: 'Test Deck!', user_id: 1)
Deck.create!(name: 'Second Deck', user_id: 1)

Flashcard.create!(front: 'This is the front', back: 'And this is the back!', deck_id: 1)
Flashcard.create!(front: 'Second Card', back: 'Wow this is another flashcard', deck_id: 1)

Flashcard.create!(front: 'Different Deck', back: 'Here is the difference', deck_id: 2)
