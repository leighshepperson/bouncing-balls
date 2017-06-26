# Bouncing Balls

Click the canvas to make a ball fire at a random direction and speed subject
to gravity and the ball's coefficient of restitution (bounciness).

[View the application here](https://bouncing-balls-demo.herokuapp.com/).

## External libraries

* [Babel](https://babeljs.io/): Transpilation to enable modern JS features and language extensions.
* [Webpack](https://webpack.github.io/): Compiling app to a browser-friendly bundle.
* [Express](http://expressjs.com/): Web server.

## Architecture

The app is composed of:

* A JavaScript application compiled and bundled using webpack.
* An Express server used to serve up the static assets.

### Unit testing

Unit testing is done with:

* [Chai](http://chaijs.com/): BDD / TDD assertion library for node.
* [Mocha](https://mochajs.org/): Feature-rich JavaScript test framework.
* [Sinon](http://sinonjs.org/): Standalone test spies, stubs and mocks for JavaScript.

To run the unit tests:

```
npm run test
```

To run the unit tests in watch mode:

```
npm run test:w
```

## Installation

```
$ git clone https://github.com/leighshepperson/bouncing-balls.git
$ cd bouncing-balls
```

Install the project dependencies using npm:

```
npm i
```

## Running the project

To debug in the browser using webpack-dev-server:

```
npm run start
```

To build for production:

```
npm run build
```

To run the production server:

```
npm run prod
```
