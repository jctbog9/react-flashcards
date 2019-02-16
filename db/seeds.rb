# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: '1234@gmail.com', password: '123456')
User.create!(email: 'user2@gmail.com', password: '123456')
User.create!(email: 'user3@gmail.com', password: '123456')
User.create!(email: 'user4@gmail.com', password: '123456')

Deck.create!(name: 'Launch Academy Week 2', user_id: 1)
Deck.create!(name: 'Second Deck', user_id: 1)

Flashcard.create!(front: 'What is an API?', back: 'API is an Application Programming Interface. It is a software intermediary that allows two applications to talk to each other', deck_id: 1 )
Flashcard.create!(front: 'What are the three key components of a user story?', back: 'We use user stories to succinctly define a feature that delivers business value to an end user. A good user story identifies: The specific role of the user we are trying to serve (As a...) What that role wants to do in the context of the application (I want to...) Why that role wants to work with that functionality (So that...)', deck_id: 1 )
Flashcard.create!(front: 'What is Acceptance Testing? How is it different from Unit Testing?', back: 'While unit testing is low level and often performed for the benefit of the development team, acceptance tests are written with the user in mind.', deck_id: 1 )
Flashcard.create!(front: 'How does capybara help us to perform acceptance testing?', back: 'Capybara is a ruby gem that works with RSpec and other ruby testing libraries. It provides us with methods like fill_in and click so that we can impersonate an end user. Tools like capybara-webkit and poltergeist can assist with testing JavaScript.', deck_id: 1 )
Flashcard.create!(front: 'Explain what a Promise is in JS', back: 'Promises provide an API that allows us to execute asynchronous code, and then handle the success or failure of that code. A promise is an object that may produce a single value sometime in the future: either a resolved value or a reason that it\'s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Routines handling a promise can attach callbacks to handle the fulfilled value or the reason for rejection.', deck_id: 1 )
Flashcard.create!(front: 'Explain the difference between synchronous and asynchronous functions.', back: 'Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run. Asynchronous functions usually accept a callback as a parameter and execution continues on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete.', deck_id: 1 )
Flashcard.create!(front: 'What are the key elements or components of an HTTP request?', back: 'An HTTP has two main components: the header and the request body. In the case of a request that results from a form submission, the body may contain parameters that will inform the server with user supplied data. The header contains important information about the request.', deck_id: 1 )
Flashcard.create!(front: 'Walk me through how an HTTP request is served.', back: 'In an HTTP interaction, there is a client and a server. An HTTP request is initiated by the client. The client sends the server important information like the path being requested, the HTTP method, and the Content-Type being requested. If the server is found and it is available, it responds to the client in the form of an HTTP response. The response includes the body of the requested document, the status code that provides a hint to the client around how the server processed the request, and the Content-Type of the body.', deck_id: 1 )
Flashcard.create!(front: 'Why is it better to direct web traffic over HTTPS as opposed to plain HTTP?', back: 'HTTP traffic is transmitted over plain text. Anyone listening in on the network conversation can gain access to secure data like passwords and credit card numbers. HTTPS traffic is encrypted, so anyone listening in would need a very complex encryption key to decipher who is saying what.', deck_id: 1 )
Flashcard.create!(front: 'In the context of HTTP, what is a query string and how is it used?', back: 'Query strings are URI encoded strings that often appear at the end of a URL. They start after the ? in an HTTP request. We often use a query string to qualify a GET request with more information.', deck_id: 1 )
Flashcard.create!(front: 'What does it mean when we say HTTP is stateless? What are the benefits and drawbacks of having a stateless protocol?', back: 'A stateless protocol does not require the server to retain information or status about each user for the duration of multiple requests. This simplifies the contract between client and server, and in many cases minimizes the amount of data that needs to be transferred.', deck_id: 1 )

Flashcard.create!(front: 'Different Deck', back: 'Here is the difference', deck_id: 2)

Follow.create!(follower_id: 1, followee_id: 2)
Follow.create!(follower_id: 1, followee_id: 3)
Follow.create!(follower_id: 1, followee_id: 4)
Follow.create!(follower_id: 2, followee_id: 3)
Follow.create!(follower_id: 2, followee_id: 4)
