const client = require('./db');

class Role {
    async getAll() {
        const res = await client.query('SELECT * FROM role');
        return res.rows;
    }

    async add(title, salary, department_id) {
        const res = await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]);
        return res.rows[0];
    }
}

module.exports = Role;