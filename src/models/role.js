const { Client } = require('pg');

class Role {
    constructor() {
        this.client = new Client({
            connectionString: process.env.DATABASE_URL,
        });
        this.client.connnet();
    }

    async getAll() {
        const res = await this.client.query('SELECT * FROM role');
        return res.rows;
    }

    async add(title, salary, department_id) {
        const res = await this.client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
    }
}

module.exports = Role;