# Journey Log | Server

> A web app for visualizing places you've visited on the map.

Backend for Journey Log App built on Express.js.

# Folder Structure

```sh
.
├── controllers/
│ ├── auth.js
│ └── logs.js
├── helpers/
├── middlewares/
│ └── verifyUserAuth.js
├── models/
├── routes/
├── services/
├── tests/
├── app.js
├── server.js
└── ...
```

We'll have two base models `User.js` (for user auth and tokens) and `LogEnry.js` (for logs collections), for each of them there're helper functions in the `services` folder. Use `verifyUserAuth.js` middleware for protected routes.

# Setup

1. Use projects Node version:

```sh
nvm use
```

2. Install dependencies:

```sh
yarn
```

3. Create an `.env` file using `.env.sample` as an example

4. Use mongoDB as a database

5. Run server on localhost:

```sh
yarn run dev
```

6. (Optional) Run tests:

```sh
yarn run test
```
