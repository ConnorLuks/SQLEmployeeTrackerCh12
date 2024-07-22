const client = require('./db');

class Department {
    async getAll() {
        const res = await client.query('SELECT * FROM department');
        return res.rows;
    }

    async add(name) {
        const res = await client.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]);
        return res.rows[0];
    }
}

module.exports = Department;