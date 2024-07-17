const inquirer = require('inquirer');
const db = require('./db');
const { getAllDepartments, addDepartment } = require('./queries');

async function mainMenu() {
  const { action } = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View all departments', 'Add a department', 'Exit']
  });

  switch (action) {
    case 'View all departments':
      const departments = await getAllDepartments();
      console.log('Departments:');
      console.table(departments);
      break;
    case 'Add a department':
      const { departmentName } = await inquirer.prompt({
        name: 'departmentName',
        type: 'input',
        message: 'Enter the name of the department:'
      });
      await addDepartment(departmentName);
      console.log(`Department '${departmentName}' added successfully.`);
      break;
    case 'Exit':
      console.log('Exiting application...');
      db.end(); // Close database connection before exiting
      process.exit(0);
  }
}

mainMenu();
