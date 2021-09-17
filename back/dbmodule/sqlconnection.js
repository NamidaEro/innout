const mysql = require('mysql');
const config = require('./db_config.json');
const { debug_log } = require('../config/debug');

const pool = mysql.createPool(config);

const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, conn) {
            if(err) {
                console.log(err);
                reject(err);
            } else {
                // debug_log("Connectdb:", conn);
                resolve(conn);
            }
        });
    });
}

const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        getConnection()
        .then(conn => {
            conn.query(query, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        })
        .catch(reject);
    });
};

module.exports = {
    executeQuery,
}