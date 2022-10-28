const path = require('path');
const express = require('express')
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const axios = require('axios');

const sequelize = require('./config/connection');
const {workouts} = require('./models/Workout')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
console.log(workouts);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

//app.get('/getRequest', (req, res) => {
    //const p
//})

app.post('/results', (req, res) => {
    const checked = req.body.checked

    if (checked == "true") {
        console.log("true");
  } else {
        console.log("false");
    }
});

