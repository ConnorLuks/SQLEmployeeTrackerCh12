const client = require('./db');

async function getAllDepartments() {
    const result = await client.query('SELECT * FROM department');
    return result.rows;
}

async function addDepartment(name) {
    await client.query('INSERT INTO department (name) VALUES ($1)', [name]);
}

async function getAllRoles() {
    const result = await client.query('SELECT * FROM role');
    return result.rows;
}

async function addRole(title, salary, department_id) {
    await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
}

async function getAllEmployees() {
    const result = await client.query('SELECT * FROM employee');
    return result.rows;
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
    await client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3)', [first_name, last_name, role_id, manager_id]);
}

module.exports = {
    getAllDepartments,
    addDepartment,
    getAllRoles,
    addRole,
    getAllEmployees,
    addEmployee,
// add more exports if more queries are added //
};