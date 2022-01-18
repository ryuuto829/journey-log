<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/ryuuto829/journey-log/master/_assets/logo.png" width="100" />
  <h1 align="center">
    Journey Log
  </h1>
  <p>A Full-stack app using React & Express for writing notes on the map about places you've visited.</P>
  <p><strong>https://journey-log-ryuuto829.netlify.app</strong></p>
  <img alt="Demo" src="https://raw.githubusercontent.com/ryuuto829/journey-log/master/_assets/journey-log-demo.gif" width="740" />
</div>

## Table of contents

- [Features](#features)
- [Front-end Tech stack](#front-end-tech-stack)
- [Back-end Tech stack](#back-end-tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)

## Features

- Login/Register with JWT token authentication
- Show all travel log markers on the map
- Add new markers on the map
- Create/update/delete the log entry
- Sort cards with log entries
- Display description and notes about the marker

## Front-end Tech stack

- React
- Reach Router
- Tailwind CSS
- React-map-gl (for Mapbox API)

## Back-end Tech stack

- MongoDB (as a database)
- Express
- JsonWebToken (JWT)
- Jest (for testing)

## Folder Structure

An App consists of two parts - client for interface and server for custom API:

```md
.
├── README.md
├── client
│ ├── src
│ ├── public
│ ├── ...
│ └── package.json
├── server
│ ├── controllers
│ ├── middlewares
│ ├── models
│ ├── routes
│ ├── services
│ ├── ...
│ ├── app.js
│ ├── server.js
│ └── package.json
└── ...
```

## Getting Started

1. Install dependencies both for client and server

```bash
yarn
```

2. [Register a Mapbox account](https://www.mapbox.com/)

3. Create an `.env` file in the root of the project based on `.env.sample`

4. Fire up the server for React app

```bash
cd client
yarn start
```

4. Build css styles

```bash
cd client
yarn build:css
```

5. Start a development server

```bash
cd server
yarn dev
```
