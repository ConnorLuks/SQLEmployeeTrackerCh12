// src/index.js

require('dotenv').config(); // Add this line to load environment variables

const inquirer = require('inquirer');
const db = require('../models');
const queries = require('../models/queries');

async function ViewData() {
  try {
    console.log('Departments:');
    const departments = await getDepartments();
    console.table(departments.rows);

    console.log('Roles:');
    const roles = await getRoles();
    console.table(roles.rows);

    console.log('Employee:');
    const employees = await getEmployees();
    console.table(employees.rows);
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
}

async function mainMenu() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'Add a department',
        'Add a role',
        'Add an employee',
        'View all departments',
        'View all roles',
        'View all employees',
        'Exit'
      ]
    }
  ]);

  switch (answers.action) {
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    case 'View all departments':
      await viewDepartments();
      break;
    case 'View all roles':
      await viewRoles();
      break;
    case 'View all employees':
      await viewEmployees();
      break;
    case 'Exit':
      db.client.end();
      process.exit();
  }

  await mainMenu();
}

async function addDepartment() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter department name:'
    }
  ]);

  await queries.addDepartment(answers.name);
}

async function addRole() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter role title:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter role salary:'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter department ID:'
    }
  ]);

  await queries.addRole(answers.title, answers.salary, answers.department_id);
}

async function addEmployee() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter employee first name:'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter employee last name:'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter role ID:'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter manager ID (or leave blank):',
      default: null
    }
  ]);

  const managerID = answers.manager_id === '' ? null : answers.manager_id;

  await queries.addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id);
}

async function viewDepartments() {
  const departments = await queries.getDepartments();
  console.table(departments.rows);
}

async function viewRoles() {
  const roles = await queries.getRoles();
  console.table(roles.rows);
}

async function viewEmployees() {
  const employees = await queries.getEmployees();
  console.table(employees.rows);
}

// Start the application
mainMenu();