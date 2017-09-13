#B-gan: A WDI 2nd GA project


![B-gan](/Users/vladturcu/development/project-2/src/images/1.png)

## Setup

Clone or download the repo

- run `yarn install` or `npm install` to install the dependencies
- run `yarn seed` or `node db/seeds` to seed the database
- run `node index.js` (or simply `nodemon` if you have nodemon installed) to start the app

You will need [node](https://nodejs.org/) and [mongodb](https://www.mongodb.com/) set up on your local environment.

If you do not have them, I would advise installing them with [homebrew](https://brew.sh/) (Mac only).
## Technologies used
- BCrypt
- Jquery
- HTML5
- Sass
- Mongo
- Express
- NodeJS
## Features

- Authentication with BCrypt
- Login redirects to previously viewed page (see `controllers/sessions.js`)
- Users can add recipes and blog posts if loged in
- users can comment and rate the recipe/blog post
- Users can only modify data they have added themselves
- User information shown if logged in
- Frontend form validation with HTML5 and [jQuery Validate Plugin](https://jqueryvalidation.org/)

## Notes
- Create an account
- Add new recipes and blog posts
- Styled with [Bulma](http://bulma.io/)
