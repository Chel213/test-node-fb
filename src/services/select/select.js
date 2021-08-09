'use strict';

/**
 *
 * @param {Array} params.data
 * @param {Array} params.selectParams
 * @returns {{}[]}
 */

module.exports = (params = {data: [], selectParams: [] })=>{

    const select = (obj={}, names=[])=>{
        const objFormat = {};
        names.forEach((item)=>{
            if(!obj.hasOwnProperty(item)) {
                return;
            }
            objFormat[item] = obj[item];
        });
        return objFormat;
    }

    const formatData = params.data.map((item)=>{
        return select(item, params.selectParams);
    });
    const dataWithOutEmpty = formatData.filter((obj)=>{
        return Boolean(Object.keys(obj).length);
    });

    return dataWithOutEmpty;
};
