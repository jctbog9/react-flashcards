# React Flashcards

React Flashcards is a social learning application currently under development.

The application is for creating decks of flashcards, documenting your learning and optionally sharing your work with others.

Built using Ruby v2.4.5 with a ReactJS front-end being served information through RESTful API endpoints on a rails 5.2.1 server

# Required Dependencies
```
Ruby v2.4.5
Rails v5.2.1
```

# Local Dev Setup

Run the following commands in sequence after cloning the repository to set up.
```
bundle
yarn install
yarn start
```
Then in a separate terminal tab/window run `rails s` to start your server.

Navigate to localhost:3000 to view the application.

# Testing

React-Flashcards tests the backend using rspec and its frontend using jasmine-enzyme.

To run frontend tests run `yarn test`
To run backend tests run `rspec`
