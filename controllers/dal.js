const cTable = require('console.table');
const connection = require('../config/db');


const dal = {
    viewAll: function (query) {
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if (err) reject(err);
                console.log('\n');
                console.table(result);
                console.log('\n');
                resolve(result);
            });
        });
    },
    viewAllBy: function (query, colToSearch, valueOfCol) {
        return new Promise((resolve, reject) => {
            connection.query(query, [colToSearch, valueOfCol], (err, result) => {
                if (err) reject(err);
                console.log('\n');
                console.table(result);
                console.log('\n');
                resolve(result);
            })
        })
    },

    deleteFrom: function (query, table, condition) {
        return new Promise((resolve, reject) => {
            connection.query(query, [table, condition], (err, result) => {
                if (err) reject(err);

                if (table === 'employees') {
                    console.log('The employee was deleted from the EMPLOYEES table \n')
                } else if (table === 'roles') {
                    console.log('The role was deleted from the ROLES table \n')
                } else {
                    console.log('The department has been deleted from the DEPARTMENTS table \n')
                }

                resolve(result);
            })
        })
    }
};

module.exports = dal;