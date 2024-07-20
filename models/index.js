const Department = require('./department');
const Role = require('/role');
const Employee = require('/employee');
const db = require('./db');
const queries = require('/queries');

module.exports = {
  Department,
  Role,
  Employee,
  db,
  queries
}