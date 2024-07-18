const { client } = require('pg');

class Department {
    construction() {
        this.client = new Client({
            connectionString: process.env.DATABASE_URL,
        });
        this.client.connect();
    }

    async getAll() {
        const res = await this.client.query('SELECT * FROM department');
        return res.rows;
    }

    async add(name) {
        const res = await this.client.query('INSERT INTO department (name) VALUES ($1) RETURNING', [name]);
        return res.rows[0];
    }
}

module.exports = Department;