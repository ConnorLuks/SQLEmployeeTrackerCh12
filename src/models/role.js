const client = require('../db');

class Role {
    async getAll() {
        const result = await client.query('SELECT * FROM role');
        return result.rows;
    }

    async add(title, salary, departmentId) {
        await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
    }
}

module.exports = Role;