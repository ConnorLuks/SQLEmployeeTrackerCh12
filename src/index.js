// src/index.js
const inquirer = require('inquirer');
const db = require('./db');
const { getAllDepartments, addDepartment, getAllRoles, addRole, getAllEmployees, addEmployee } = require('./queries');
const Department = require('./models/department');
const Role = require('./models/role');
const Employee = require('./models/employee');

const department = new Department();
const role = new Role();
const employee = new Employee();

async function mainMenu() {
  const { action } = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View all departments', 'Add a department', 'View all roles', 'Add a role', 'View all employees', 'Add an employee', 'Exit']
  });

  switch (action) {
    case 'View all departments':
      const departments = await department.getAll();
      console.log('Departments:');
      console.table(departments);
      break;
    case 'Add a department':
      const { departmentName } = await inquirer.prompt({
        name: 'departmentName',
        type: 'input',
        message: 'Enter the name of the department:'
      });
      await department.add(departmentName);
      console.log(`Department '${departmentName}' added successfully.`);
      break;
    case 'View all roles':
      const roles = await role.getAll();
      console.log('Roles:');
      console.table(roles);
      break;
    case 'Add a role':
      const roleDetails = await inquirer.prompt([
        {
          name: 'title',
          type: 'input',
          message: 'Enter the title of the role:'
        },
        {
          name: 'salary',
          type: 'input',
          message: 'Enter the salary of the role:'
        },
        {
          name: 'departmentId',
          type: 'input',
          message: 'Enter the department ID for the role:'
        }
      ]);
      await role.add(roleDetails.title, roleDetails.salary, roleDetails.departmentId);
      console.log(`Role '${roleDetails.title}' added successfully.`);
      break;
    case 'View all employees':
      const employees = await employee.getAll();
      console.log('Employees:');
      console.table(employees);
      break;
    case 'Add an employee':
      const employeeDetails = await inquirer.prompt([
        {
          name: 'firstName',
          type: 'input',
          message: 'Enter the first name of the employee:'
        },
        {
          name: 'lastName',
          type: 'input',
          message: 'Enter the last name of the employee:'
        },
        {
          name: 'roleId',
          type: 'input',
          message: 'Enter the role ID for the employee:'
        },
        {
          name: 'managerId',
          type: 'input',
          message: 'Enter the manager ID for the employee (optional):'
        }
      ]);
      await employee.add(employeeDetails.firstName, employeeDetails.lastName, employeeDetails.roleId, employeeDetails.managerId);
      console.log(`Employee '${employeeDetails.firstName} ${employeeDetails.lastName}' added successfully.`);
      break;
    case 'Exit':
      console.log('Exiting application...');
      db.end(); // Close database connection before exiting
      process.exit(0);
  }
}

mainMenu();