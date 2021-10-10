const inquirer = require('inquirer');
const { getAllDepts } = require('./getAll');
// Use inquirer to ask which department to delete from the the db
const toDeleteDept = () => {
    return new Promise((resolve, reject) => {
        // 1st async function will get an array of objects for all the managers.
        // These will be used to populate the choices for the question.
        getAllDepts()
            .then((allDepts) =>
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'deptToDelete',
                        message: "Which department would you like to delete?",
                        choices: allDepts
                    },
                ])
            )
            .then((answers) => resolve(answers))
            .catch((err) => reject(err))
    });
};

module.exports = toDeleteDept;