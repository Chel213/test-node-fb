'use strict';

const axios = require('axios');
const {URL_FB, ID_TARGETING_SEARCH, ACCESS_TOKEN} = require('../constatnts/constants');
const filterData = require('../controllers/filterData');
const serialize = require('../services/serialize/serializeOtherParams');

/**
 *
 * @param req
 * @param res
 */

module.exports = (req, res, typeReq = 'GET') => {
    const query = typeReq === 'GET' ? req.query : req.body;
    const {q: qParam, order ,filter, select,...otherParams} = query;
    if(!qParam) {
        res.status(400)
            .send({"status": "ERROR", "message": "not specified required parameter q"})
        return
    }



    const URL = `${URL_FB}${ID_TARGETING_SEARCH}/targetingsearch/?q=${qParam}&${serialize(otherParams)}&access_token=${ACCESS_TOKEN}`;
    axios.get(URL, {timeout: 2000})
        .then((response) => {
            const content = filterData(response, query);
            res.status(200)
                .json(content)
        })
        .catch((err) => {
            if(err.response) {
                res.status(400)
                    .json(err.response.data)
                return
            }

            res.status(400)
                .json({"status": "error", "message": err})
        });
}
