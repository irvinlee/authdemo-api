const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { getFullUrl } = require('./util/helpers');

dotenv.config('.env');

//misc
app.use(bodyParser.json());
app.use(cors());
//routing
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const publicRouter = require('./routes/public');

app.use(getFullUrl('auth'), authRouter);
app.use(getFullUrl('users'), usersRouter);
app.use(getFullUrl('public'), publicRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is now running on por:  ${PORT}`));
