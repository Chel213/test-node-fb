'use strict';

/**
 *
 * @param {Object} params - params to get params
 * @returns {string}
 */

module.exports =  (params) => {
    let str = "";
    for (let key in params) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(params[key]);
    }

    return str;
};
