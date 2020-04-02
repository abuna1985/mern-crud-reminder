# MERN CRUD Reminder App

A full-stack application that runs a front-end and back-end server

## Requirements
[X] Allow users to sign up/sign in to the application using username or email
[ ] Allow users to add/edit reminders when they sign in to the application
[ ] Notify the users about their reminders via text or email when their reminders are due
[X] Have different routes for each functionality: sign up /sign in /sign out /add reminders

## Installing

Here are the steps to get you up and running on the dev environment

```
cd mern-crud-reminder 
```
```
npm install (or yarn install)
```

```
cp .env.exmple .env
```

```
cd client && cp example.env .env && npm install (or yarn install)
```

Then give this command a shot

```
npm run dev (yarn dev)
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Test the routes
```
npm run test-routes (yarn test -t router)
```
Test the conrollers
```
npm run test-controllers (yarn test -t controllers)
```
Test the Authorization
```
npm run test-auth (yarn test -t Authentication)
```
Test the Mongoose Models
```
npm run test-models (yarn test -t model)
```

## Built With

* [MongoDB](https://www.mongodb.com/) - A general purpose, document-based, distributed database
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework
* [React](https://rometools.github.io/rome/) - Used to generate RSS Feeds 
* [Node](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Authors

* **Adam Abundis** - *Initial work* - [Abuna1985](https://github.com/abuna1985)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

