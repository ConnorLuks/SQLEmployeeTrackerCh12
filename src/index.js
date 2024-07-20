require('dotenv').config();
const inquirer = require('inquirer');
const { queries } = require('../models');

async function mainMenu() {
  const answers = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Exit'
    ]
  });

  switch (answers.action) {
    case 'View all departments':
      const departments = await queries.getDepartments();
      console.table(departments);
      break;
    case 'View all roles':
      const roles = await queries.getRoles();
      console.table(roles);
      break;
    case 'View all employees':
      const employees = await queries.getEmployees();
      console.table(employees);
      break;
    case 'Add a department':
      const { name } = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'Enter department name:'
      });
      await queries.addDepartment(name);
      break;
    case 'Add a role':
      const { title, salary, department_id } = await inquirer.prompt([
        {
          name: 'title',
          type: 'input',
          message: 'Enter role title:'
        },
        {
          name: 'salary',
          type: 'input',
          message: 'Enter role salary:'
        },
        {
          name: 'department_id',
          type: 'input',
          message: 'Enter department ID:'
        }
      ]);
      await queries.addRole(title, salary, department_id);
      break;
    case 'Add an employee':
      const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
          name: 'first_name',
          type: 'input',
          message: 'Enter employee first name:'
        },
        {
          name: 'last_name',
          type: 'input',
          message: 'Enter employee last name:'
        },
        {
          name: 'role_id',
          type: 'input',
          message: 'Enter role ID:'
        },
        {
          name: 'manager_id',
          type: 'input',
          message: 'Enter manager ID (or leave blank):',
          default: null
        }
      ]);
      await queries.addEmployee(first_name, last_name, role_id, manager_id);
      break;
    case 'Exit':
      process.exit();
  }
  mainMenu();
}

mainMenu();