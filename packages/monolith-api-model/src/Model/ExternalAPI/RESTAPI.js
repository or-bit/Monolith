const axios = require('axios').create();

/**
 * @class RestApi - Class that manages common HTTP requests. Uses axios to perform async requests.
 */
class RestApi {
    static get(url) {
        return new Promise((resolve, reject) => {
            axios.get(url).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    static delete(url) {
        return new Promise((resolve, reject) => {
            axios.delete(url).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    static post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    }
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
