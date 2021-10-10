const inquirer = require('inquirer');
const { getAllRoles } = require('./getAll');

// Use inquirer to ask which role to delete from the the db
const toDeleteRole = () => {
    return new Promise((resolve, reject) => {
        // 1st async function will get an array of objects for all the managers.
        // These will be used to populate the choices for the question.
        getAllRoles()
            .then((allRoles) =>
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'roleToDelete',
                        message: "Which role would you like to delete?",
                        choices: allRoles
                    },
                ])
            )
            .then((answers) => resolve(answers))
            .catch((err) => reject(err))
    });
};

module.exports = toDeleteRole;