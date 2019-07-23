# React Flashcards

React Flashcards is a social learning application currently under development.

The application is for creating decks of flashcards, documenting your learning and optionally sharing your work with others.

Built using Ruby v2.4.5 with a ReactJS front-end being served information through RESTful API endpoints on a rails 5.2.1 server

# Required Dependencies
```
Ruby v2.4.5
Rails v5.2.1
```

# Local Dev Configuration

Run the following commands in sequence after cloning the repository to set up.
```
bundle
yarn install
```

# Creating Local Database

Run the following commands in your terminal
**Make sure you have postgres installed the application uses that as its database**
```
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
```

# Testing

React-Flashcards tests the backend using rspec and its frontend using jasmine-enzyme.

To run frontend tests run `yarn test`
To run backend tests run `rspec`
