<div align="center">

<img alt="Journey Log Logo" src="https://raw.githubusercontent.com/ryuuto829/journey-log/master/_assets/logo.png" width="100" />
  
# Journey Log

A Full-stack Travel Log to store / list places you have traveled. Built with React and Express.

**https://journey-log-ryuuto829.netlify.app**

<img alt="Journey Log Demo" src="https://raw.githubusercontent.com/ryuuto829/journey-log/master/_assets/journey-log-demo.gif" width="740" />

</div>

## Overview

An app consists of two parts:

- `client` - frond-end (user interface) hosted on Netlify
- `server` - back-end (custom server) hosted on Heroku

## Features

- User authentication with JSON web tokens (JWT)
- Access token and Refresh token implementation
- Mongoose `User` & `LogEntry` data models
- List all log entries on the map
- Interactive custom markers on the map
- CRUD operations on DB
- Sorting log entry cards
- Marker with reactive form and log entry details
- Custom API routes

## Front-end Tech Stack

- React
- Reach Router
- Tailwind CSS
- React-map-gl (for Mapbox API)
- Netlify

## Back-end Tech Stack

- MongoDB (database)
- Node.js (w/ Express.js)
- JSON web tokens (JWT)
- Jest (for testing)
- Heroku

## Folder Structure

An app consists of two parts - `client` for interface and `server` for custom API:

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

4. Build CSS styles

```bash
cd client
yarn build:css
```

5. Start a development server

```bash
cd server
yarn dev
```
