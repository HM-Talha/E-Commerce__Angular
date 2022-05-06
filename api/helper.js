const mysql = require("mysql");
var connection = require("./database");
const helper = {
  get: (search_query) => {
    return new Promise((resolve, reject) => {
      connection.query(search_query, async (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  save: (search_query, data) => {
    return new Promise((resolve, reject) => {
      connection.query(search_query, [data], async (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  update: (search_query, to, where) => {
    return new Promise((resolve, reject) => {
      connection.query(search_query, [to, where], async (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  delete: (delete_query) => {
    return new Promise((resolve, reject) => {
      connection.query(delete_query, async (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = helper;
