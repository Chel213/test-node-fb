'use strict';

/**
 *
 * @param params
 * @param {Array} params.data - list items
 * @param {string} params.prop - name filter values
 * @param {string} params.val - filter values
 * @returns {*[]}
 */


module.exports = (params = {data: [], prop: 'type', val: '' })=>{
    const value = params.val.toString().toLowerCase();
    if(params.prop.toString() === "audience_size_gt") {
        return params.data.filter((item)=>{
            if(!item['audience_size']) {
                return true;
            }
            return item['audience_size'] > params.val;
        });
    }

    if(params.prop.toString() === "audience_size_lt") {
        return params.data.filter((item)=>{
            if(!item['audience_size']) {
                return true;
            }
            return item['audience_size'] < params.val;
        });
    }

    return  params.data.filter((item)=> {
        if (!item[params.prop]) {
            return true;
        }
        return item[params.prop].toString().toLowerCase().startsWith(value);
    });
}
