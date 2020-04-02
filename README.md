# MERN CRUD Reminder App

A full-stack application that runs a front-end and back-end server

## Requirements
[X] Allow users to sign up to the application using username or email

[X] Allow users to sign in to the application using username or email

[X] Allow users to add reminders when they sign in to the application

[ ] Allow users to edit reminders when they sign in to the application (API available/component coming soon)

[ ] Notify the users about their reminders via text or email when their reminders are due (coming soon)

[X] Have different routes for each functionality: sign up /sign in /sign out /add reminders

## Background

So I build the API first. I decided to build the crud mongodb functions (createOne, getOne, getMany, updateone, deleteOne) and tie it to the Mongoose model via the Route controller. That way I didn't need to make a CRUD function for every collection table. I was able to create a JWT and utilize session storage with sign in and sign up. The client sends the token with each API call and the API checks every request for the token. If none is found, the user is redirected to the login page. I have built the API for edit/delete, but I need to implement via React. I also am going to either reference the phone (via the user) and add the reminder sms/email function through the reminder model schema. Overall, a real learning lesson. My next goal after edit/delete funcionality and SMS/Email reminders is to configure for production and host on heroku.

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

