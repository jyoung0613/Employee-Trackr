const inquirer = require('inquirer');
const { getAllManagers } = require('./getAll');

// Use inquirer to ask for which manager the user wants to see the employees.
const viewByMng = () => {
    return new Promise((resolve, reject) => {
        // 1st async function will get an array of objects for all the managers.
        // These will be used to populate the choices for the question.
        getAllManagers()
            .then((allManagers) =>
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'managerId',
                        message: "For which manager would you like to see their employees?",
                        choices: allManagers
                    }
                ])
            )
            .then((answers) => resolve(answers))
            .catch((err) => reject(err))
    });
};

module.exports = viewByMng