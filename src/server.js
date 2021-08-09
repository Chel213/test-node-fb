'use strict';

const express = require('express');
const appRouter = require('./routes/appRouter');
const authRouter = require('./routes/auth');
const {initDb} = require('./db/db');
const {PORT} = require('./constatnts/constants');

(async() => {
    await initDb();
})();

const app = express();
app.use(express.json());

app.use('/', appRouter);
app.use('/auth', authRouter);

app.use((req, res)=>{
    res.status(404)
        .send({"type": "error", "message": "not found"})
});

app.listen(process.env.PORT || PORT);
