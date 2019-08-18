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

# Running Locally

After previous instructions have completed successfully run `rails s` in one tab and `yarn start` in another.
To view the web page visit localhost:3000

# Testing

React-Flashcards tests the backend using rspec and its frontend using jasmine-enzyme.

To run frontend tests run `yarn test`
To run backend tests run `rspec`

# Backlog Items

- (Low) Jasmine-Enzyme with Jest-Enzyme testing
- (Medium) Add GraphQL endpoint for more efficient calls to the backend
- (High) Fix Decks controller to display current user's decks only if they have decks, otherwise it should display decks created by other users (Also will contain a frontend fix for the user's homepage header to indicate what types of decks are being displayed based on this fix)
- (Medium) OAuth with Quizlet for better managing user logins
