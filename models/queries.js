const client = require('./db');

async function getDepartments() {
  const res = await client.query('SELECT * FROM department');
  return res.rows;
}

async function addDepartment(name) {
  const res = await client.query('INSERT INTO department (name) VALUES ($1) RETURNING ', [name]);
  return res.rows[0];
}

async function getRoles() {
  const res = await client.query('SELECT FROM role');
  return res.rows;
}

async function addRole(title, salary, department_id) {
  const res = await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING ', [title, salary, department_id]);
  return res.rows[0];
}

async function getEmployees() {
  const res = await client.query('SELECT FROM employee');
  return res.rows;
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
  const res = await client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id]);
  return res.rows[0];
}

module.exports = {
  getDepartments,
  addDepartment,
  getRoles,
  addRole,
  getEmployees,
  addEmployee,
};