const client = require('/.db');

class Employee {
    async getAll() {
        const res = await client.query('SELECT * FROM employee');
        return res.rows;
    }

    async add(name) {
        const res = await client.query('INSERT INTO department (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id]);
        return res.rows[0];
    }
}

module.exports = Employee;