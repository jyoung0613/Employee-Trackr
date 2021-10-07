// Get the connection query to run asynchronously after receiving the information it needs from the inquirer package and funcitons.
// Validate employees, roles, and departments against existing
// Validate salary as a number

// NPM Packages
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const colors = require('colors');

// Dependencies
const connection = require('./config/connections');
const { connect } = require('./config/connections');


// Arrays
const employeeArr = () => {
    const employees = [];
    connection.query('SELECT CONCAT_WS(" ", employee.first_name, employee.last_name) AS Employee FROM employee ORDER BY Employee ASC', function(err, res) {
        if (err) throw err;
        res.forEach(({ Employee }) => employees.push(Employee));
    })
    return employees;
};

const roleArr = () => {
    const roles = [];
    connection.query('SELECT * FROM role', function(err, res) {
        if (err) throw err;
        res.forEach(({ title }) => roles.push(title));
    })
    return roles;
};

const departmentArr = () => {
    const departments = [];
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw err;
        res.forEach(({ department_name }) => departments.push(department_name));
    })
    return departments;
};

// Colorized fonts
const welcomeMsg = `* * * * WELCOME TO EMPLOYEE TRACKER. * * * *\n`.underline.green;
const error = `\r\n>> ERR: `.red.bold;
const noInfoEntered = `No information was entered.`;

// Welcome and Instructions
const welcome = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'welcome',
            message: welcomeMsg + '\nYou will have the opportunity to access and edit information about employees, roles and departments. \nLet\'s begin. Press ENTER to continue.\n',
        },
    ])
    .then(startPrompts)
};

const startPrompts = async () => {
    return await inquirer
    .prompt([
        {
            name: 'action',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: [
                'EMPLOYEES: View all',
                'EMPLOYEES: Add',
                'EMPLOYEES: Update role',

                'ROLES: View all',
                'ROLES: Add',

                'DEPARTMENTS: View all',
                'DEPARTMENTS: Add',
            ],
        },
    ])
    .then((answer) => {
        switch (answer.action) {
            case 'EMPLOYEES: View all':
                viewEmployees();
                break;

            case 'EMPLOYEES: Add':
                addEmployee();
                break;

            case 'EMPLOYEES: Update role':
                updateEmployeeRole();
                break;

            case 'ROLES: View all':
                viewRoles();
                break;

            case 'ROLES: Add':
                addRole();
                break;

            case 'DEPARTMENTS: View all':
                viewDepartments();
                break;

            case 'DEPARTMENTS: Add':
                addDepartment();
                break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
        }
    });
};

// CRUD functions
// CREATE (Add)
const addEmployee = async() => {
    const employee = await inquirer
    .prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Input Employee\'s FIRST NAME.',
            validate: first_name => {
                if (first_name) {
                    return true;
                } else {
                    console.log (error + noInfoEntered + `Please enter the Employee\'s FIRST NAME.`);
                    return false;
                }
            },
        },
        {
            name: 'last_name',
            type: 'input',
            message: ({ first_name }) => `Input ${first_name}\'s LAST NAME.`,
            validate: last_name => {
                if (last_name) {
                    return true;
                } else {
                    ({ first_name }) => console.log (error + noInfoEntered + `Please enter ${first_name}\'s LAST NAME.`);
                    return false;
                }
            },
        },
        {
            
        }
    ])
}
// READ (View)


// UPDATE (Change)


// Delete (Remove)