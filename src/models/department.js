const client = require('../db');

class Department {
    async getAll() {
        const result = await client.query('SELECT * FROM department');
        return result.rows;
    }

    async add(name) {
        await client.query('INSERT INTO department (name) VALUES ($1)', [name]);
    }
}

module.exports = Department;