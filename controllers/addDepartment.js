const inquirer = require('inquirer');
const connection = require('../config/db');

// Add a new employee to the db
const addDept = (askTask) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the name of the department?',
        }
    ])
        .then((answers) => {
            connection.query(
                "INSERT INTO departments SET ?",
                {
                    dept_name: answers.deptName,
                },
                function (err) {
                    if (err) throw err;
                    console.log("The department was added successfully!");
                    askTask();
                }
            );
        });
};

module.exports = addDept;