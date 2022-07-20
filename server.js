const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// format date and format amount helpers. format amount may not be needed
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const { response } = require('express');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Configure Handlebars.js engine with custom helper functions for value display
const hbs = exphbs.create({ helpers });


const sess = {
  secret: 'New super secret string to get things online',
  cookie: {
    // Stored in milliseconds (30 minutes)
    maxAge: 1800000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Configure templating engine handlebars with Express.js
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('The port is now up and we are listening...'));
});
