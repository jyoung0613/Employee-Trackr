const inquirer = require('inquirer');
const { getAllEmp } = require('./getAll');

// Use inquirer to ask which employee to delete from the the db
const toDeleteEmployee = () => {
    return new Promise((resolve, reject) => {
        // 1st async function will get an array of objects for all the managers.
        // These will be used to populate the choices for the question.
        getAllEmp()
            .then((allEmployees) =>
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'empToDelete',
                        message: "Which employee would you like to delete?",
                        choices: allEmployees
                    },
                ])
            )
            .then((answers) => resolve(answers))
            .catch((err) => reject(err))
    });
};

module.exports = toDeleteEmployee;