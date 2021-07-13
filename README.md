# Welcome to Food Tinder #

This is a complete Full-stack MERN project. 

It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12. On Backend side Node.js, Express and MongoDB were used. 

## About ##

The project is about engaging customers in a funny way and get insights about what products they like. To do that, I wanted the customer to be able to do it like playing a game of “Food Tinder”.

In case you’re not familiar with Tinder and how it works, [here](https://www.youtube.com/watch?v=1sIyYQLSYng) is a YouTube videos that might be helpful for you :)

## Task ##

Implementing a mobile-first App which has Tinder style animated like, dislike and favorite actions (only like or dislike) by using User's touch screen gestures.


## Used Tech-stack ##

### Frondend ###

Angular 9, Typescript, RxJs, Bootstrap 4, PrimeNG, Hammerjs, Angular Animations, Font-awasome etc.

### Backend ###

Node.js, Express, MongoDB, Bcryptjs, Dotenv, Express-async-handler, Jsonwebtoken, Mongoose, Concurrently.

## Set up ##

First, in the project folder, run 

```npm i```

Then, in fronted folder

```cd frontend/```

```npm i```

## Development server (running on 4200 port)

In the source folder, run `npm run dev` for a dev server. This will install all necessary frontend and backend libraries concurrently.

Then, navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server (running on 5000 port)

First, be sure about that the environmental variable stored in '.env' file is 

```NODE_ENV = production```

Then, in the source folder, run `npm run build` for usind only backend server. This will install all necessary frontend and backend libraries concurrently.

Then, navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
