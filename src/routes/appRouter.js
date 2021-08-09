'use strict';

const {Router} = require('express');
const checkAuth = require('../middleware/checkAuth');
const targetingSearch = require('../controllers/targetingSearch');


const apiHelp = {
    status: "success",
    message: {
        router: {
            targetingsearchAPI: "GET /targetingsearch/",
            register: "POST /auth/register (params = login, password)",
            login: "POST /auth/register (params = login, password)",
            "[?filter]": "`filter` =>  filter[name]=Harvard, filter[audience_size_gt]=100000," +
                " filter[audience_size_lt]=10000000, `order` => order[ID]=DESC/ASC, `limit` => limit={number}," +
                " `select => select[]=name`"
        }
    }
};

const  appRouter = new Router();

appRouter.get('/', (req, res)=>{
    res.status(200)
        .send(apiHelp)
});

appRouter.get('/targetingsearch/', checkAuth,(req, res)=>{
    targetingSearch(req, res);
});

appRouter.post('/targetingsearch/', checkAuth,(req, res)=>{
    targetingSearch(req, res, 'POST');
});


module.exports = appRouter;
