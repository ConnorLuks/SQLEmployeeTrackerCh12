const { client } = require('./db');

async function addDepartment(name) {
  const query = 'INSERT INTO department (name) VALUES ($1)';
  const values = [name];
  await client.query(query, values);
}

async function addRole(title, salary, department_id) {
  const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
  const values = [title, salary, department_id];
  await client.query(query, values);
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
  const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
  const values = [first_name, last_name, role_id, manager_id || null];
  await client.query(query, values);
}

async function getDepartments() {
  const query = 'SELECT * FROM department';
  return client.query(query);
}

async function getRoles() {
  const query = 'SELECT * FROM role';
  return client.query(query);
}

async function getEmployees() {
  const query = 'SELECT * FROM employee';
  return client.query(query);
}

module.exports = {
  addDepartment,
  addRole,
  addEmployee,
  getDepartments,
  getRoles,
  getEmployees
};