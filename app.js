const inquirer = require('inquirer');
const questTask= require('./controllers/taskQuestion');

const addEmployee = require('./controllers/addEmployee');
const addRole = require('./controllers/addRoles');
const addDept = require('./controllers/addDepartment');
const updateEmployee = require('./controllers/updateEmployee');
const viewByMng = require('./controllers/viewByMng');
const toDeleteEmployee = require('./controllers/deleteEmployee');
const toDeleteRole = require('./controllers/deleteRole');
const toDeleteDept = require('./controllers/deleteDepartment');

const dal = require('./controllers/dal');
const queries = require('./db/queries');



// Ask the user what taks they'd like to complete. Depending on the task, different functions will
// be called and when task is complete, the askTask function will run again.
const askTask = () => {
    inquirer
        .prompt(questTask)
        .then((answers) => {
            const task = answers.task;
            if (task === 'view all employees') {
                dal.viewAll(queries.allEmployees).then((res) => askTask());
            } else if (task === 'view employees by manager') {
                viewByMng()
                .then((answers) => dal.viewAllBy(queries.allEmployeesByMng, 'm.id', answers.managerId))
                .then(() => askTask());
            }else if (task === 'view all roles') {
                dal.viewAll(queries.allRoles)
                .then(() => askTask());
            } else if (task === 'view all departments') {
                dal.viewAll(queries.allDepts)
                .then(() => askTask());
            } else if (task === 'add employee') {
                addEmployee(askTask);
            } else if (task === 'add role') {
                addRole(askTask);
            } else if (task === 'add department') {
                addDept(askTask);
            } else if (task === 'update employee') {
                updateEmployee();
            } else if (task === 'delete employee') {
                toDeleteEmployee()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'employees', Number(answers.empToDelete)))
                .then(() => askTask());
            } else if (task === 'delete role') {
                toDeleteRole()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'roles', Number(answers.roleToDelete)))
                .then(() => askTask());
            } else if (task === 'delete department') {
                toDeleteDept()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'departments', Number(answers.deptToDelete)))
                .then(() => askTask());
            } else {
                process.exit();
            }
        })
        .catch((err) => console.log(err));
};

askTask();

module.exports = askTask;