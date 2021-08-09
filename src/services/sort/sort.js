'use strict';

/**
 *
 * @param params
 * @param {Array} params.data - list items
 * @param {string} params.prop - name sort values
 * @param {string} params.type - type sorts
 * @returns {[]}
 */

module.exports = (params={data: [], prop: 'id', type: ''})=>{
    const prop = params.prop.toLowerCase();
    const type = params.type.toLowerCase();
    const data = params.data;

    if (type === 'asc') {
         data.sort((a, b)=>{
            if (a[prop] < b[prop] ) {
                return -1;
            }
            if (a[prop] > b[prop]) {
                return 1;
            }
            return 0;
        });

        return;
    }

    if(type === 'desc') {

         data.sort((a, b)=>{
            if (a[prop] > b[prop] ) {
                return -1;
            }
            if (a[prop] < b[prop]) {
                return 1;
            }
            return 0;
        });

        return;
    }
    // return data;
}
