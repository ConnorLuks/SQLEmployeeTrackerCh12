const client = require('pg');

class Employee {
    constructor() {
        this.client = new Client({
            connectionString: process.env.DATABASE_URL,
        });
        this.client.connect();
    }

    async getAll() {
        const res = await this.client.query('SELECT * FROM employee');
        return res.rows;
    }

    async add(first_name, last_name, role_id, manager_id) {
        const res = await this.client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
        return res.rows[0];
    }
}

module.exports = Employee;