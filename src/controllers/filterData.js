'use strict';


const filter = require('../services/filter/filter');
const sort = require('../services/sort/sort');
const select = require('../services/select/select');

/**
 *
 * @param {Object} response
 * @param {Array} response.data
 * @param {Object} query - parameters
 */

module.exports = (response, query)=>{
    let content = response.data;

    if (query.hasOwnProperty('select')) {
        const selectParams = Object.values(query.select);
        const data = content.data;
        const formatData = select({data, selectParams});
        content = {...content, data: formatData}
    }

    if (query.hasOwnProperty('filter')) {
        const filterParams = Object.entries(query.filter);
        let data = content.data;
        for (const item of filterParams) {
            const [prop, val] = item;
            data = filter({data, prop, val});
        }

        content = {...content, data}
    }

    if (query.hasOwnProperty('order')) {
        const [name, type] = Object.entries(query.order)[0];
        sort({data: content.data, prop: name, type: type});
    }

    return content;
}

