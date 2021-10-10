const inquirer = require("inquirer");

const questTask = [
    {
        type: 'rawlist',
        name: 'task',
        message: 'What would you like to do with your database?',
        choices: [
            new inquirer.Separator('=== VIEW INFO ==='),
            'view all employees',
            'view employees by manager',
            'view all roles',
            'view all departments',
            new inquirer.Separator('=== ADD NEW INFO ==='),
            'add employee',
            'add role',
            'add department',
            new inquirer.Separator('=== UPDATE INFO ==='),
            'update employee',
            new inquirer.Separator('=== DELETE INFO ==='),
            'delete employee',
            'delete role',
            'delete department',
            new inquirer.Separator('=== EXIT ==='),
            'exit application'
        ],
        pageSize: 13
    }
];

module.exports = questTask;