
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const eventRouter = require('./routes/event.router');
const gameRouter = require('./routes/games.router');
const addGameRouter = require('./routes/addGame.router');
const addEventRouter = require('./routes/addEvent.router');
const allUsersRouter = require('./routes/allUsers.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/schedule', eventRouter);
app.use('/game', gameRouter);
app.use('/addgame', addGameRouter);
app.use('/addevent', addEventRouter);
app.use('/all', allUsersRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
