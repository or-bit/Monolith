const axios = require('axios').create();

/**
 * @class Class that manages common HTTP requests. Uses axios to perform async requests.
 */
class RestApi {
    /**
     * Make a GET request.
     * @param url {string} Url of the resource to call
     * @returns {Promise} Promise that will be resolved if the connection and the request are successful, and will be
     * rejected otherwise.
     */
    static get(url) {
        return new Promise((resolve, reject) => {
            axios.get(url).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * Make a DELETE request.
     * @param url {string} Url of the resource to call
     * @returns {Promise} Promise that will be resolved if the connection and the request success, and will be
     * rejected otherwise
     */
    static delete(url) {
        return new Promise((resolve, reject) => {
            axios.delete(url).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * Make a POST request.
     * @param url {string} Url of the resource to call
     * @param data {JSON} Data to send
     * @returns {Promise} Promise that will be resolved if the connection and the request are successful, and will be
     * rejected otherwise
     */
    static post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Make a PUT request.
     * @param url {string} Url of the resource to call
     * @param data {JSON} Data to send
     * @returns {Promise} Promise that will be resolved if the connection and the request are successful, and will be
     * rejected otherwise.
     */
    static put(url, data) {
        return new Promise((resolve, reject) => {
            axios.put(url, data).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    }

}
module.exports = RestApi;
