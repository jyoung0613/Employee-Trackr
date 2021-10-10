const inquirer = require('inquirer');
const connection = require('../config/db');

const { getAllRoles, getAllManagers } = require('./getAll');

// Add a new employee to the db
// Instead of requiring askTask above, use it as a parameter. Otherwise it was being imported before it was actually being exported from the module.
const addEmployee = (askTask) => {
    // or could require the module inside this function

    // Call these 2 asyn functions to get an array of all the roles and all the managers
    // These will be used to populate the choices for the 3rd and 5th questions.
    Promise.all([getAllRoles(), getAllManagers()])
        .then(([allRoles, allManagers]) =>
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: "What is the employee's first name?",
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: "What is the employee's last name?",
                },
                {
                    type: 'list',
                    name: 'roleId',
                    message: "What is the employee's role?",
                    choices: allRoles
                },
                {
                    type: 'list',
                    name: 'managerOrNo',
                    message: "Does the employee have a manager?",
                    choices: ['yes', 'no'],
                },
                {
                    type: 'list',
                    name: 'managerId',
                    message: "Who is the employee's manager?",
                    choices: allManagers,
                    when: (answers) => answers.managerOrNo === 'yes',
                }
            ])).then((answers) => {
                // Query the employees db and add a new row with the new employee info
                // If the new emplyee has a manager, include the manager ID in the insertion
                if (answers.managerOrNo === 'yes') {
                    connection.query(
                        "INSERT INTO employees SET ?",
                        {
                            first_name: answers.firstName,
                            last_name: answers.lastName,
                            role_id: Number(answers.roleId),
                            manager_id: Number(answers.managerId) // || DEFAULT??  Use ternary?
                        },
                        function (err) {
                            if (err) throw err;
                            console.log("Your employee was added successfully!");
                            // re-prompt the user for the next task (or to exit)
                            askTask();
                        }
                    );
                    // Otherwise, don't and it will default to NULL
                } else {
                    connection.query(
                        "INSERT INTO employees SET ?",
                        {
                            first_name: answers.firstName,
                            last_name: answers.lastName,
                            role_id: Number(answers.roleId),
                        },
                        function (err) {
                            if (err) throw err;
                            console.log("Your manager was added successfully!");
                            // re-prompt the user for the next task (or to exit)
                            askTask();
                        }
                    );
                }

            }).catch((err) => console.log(err));
};

module.exports = addEmployee;