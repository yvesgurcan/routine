An application that lets the user create recurring tasks coming back automatically after a set amount of time. The aim is to encourage users to create healthy routines for self-care and keeping chores under control.

## Features

-   Tasks are sorted and roughly grouped by the time of the day when they must be accomplished (1pm, morning, 15 minutes after another task).
-   Tasks don't pile up if they have not been accomplished before they reach the next cycle.
-   User can see history of the tasks they accomplished by day, week, or month.
-   Users can see reports that tell them, for example, how many tasks they accomplished in a timely manner.
-   User is awarded badges for various achievements (task accomplished X days in a row, X tasks accomplished; set up X morning tasks, ...).
-   App gives encouragement to the user when they accomplish a task.
-   Accomplished tasks stay clearly visible but are striked through.

## Main dependencies

-   TypeScript
-   React Router
-   Styled Components
-   Babel config
-   Prettier config

## Setup

    npm i

## Development

    npm start

Runs a development server at `localhost:8080`. The server is also accessible to other devices who are connected to the same network.

The address of the server on your local network depends on the IP of your machine but the port is the same as the `localhost` one. To get the address of the development server on your local network:

    npm run network-info

Entry point of the application is located at `./src/index.ts`. This file must use the TypeScript extension `.ts`. However, other files imported in `index.ts` can be either TypeScript files or JavaScript files with extension `.js`.

## Build/Deployment

Bump the version of your application.

    npm version patch

This command will run your tests, create a production build at the root of your project, commit and push it.

## Structure

    src
    ├── components
    ├── views
    ├── index.tsx
    ├── index.html
