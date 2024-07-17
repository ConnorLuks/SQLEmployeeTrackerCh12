const client = require('../db');

class Employee {
    async getAll() {
        const result = await client.query('SELECT * FROM employee');
        return result.rows;
    }

    async add(name) {
        await client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
    }
}

module.exports = Employee;