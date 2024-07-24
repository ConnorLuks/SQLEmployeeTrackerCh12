-- Drop existing tables if they exist
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

-- Create department table
CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

-- Create role table
CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE CASCADE
);

-- Create employee table
CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id VARCHAR(30) INTEGER,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL
);

-- Insert initial data
-- Insert Departments
INSERT INTO department (name) VALUES ('Design');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Marketing');
INSERT INTO department (name) VALUES ('IT');
INSERT INTO department (name) VALUES ('Public Relations');
INSERT INTO department (name) VALUES ('Distribution');
INSERT INTO department (name) VALUES ('Linguistics');

-- Insert Roles
INSERT INTO role (title, salary, department_id) VALUES ('Graphics', 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Economist', 70000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Analysis', 60000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Senior IT Specialist', 85000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Public Relations Manager', 45000, 5);
INSERT INTO role (title, salary, department_id) VALUES ('Lead Warehouse Controller', 60000, 6);
INSERT INTO role (title, salary, department_id) VALUES ('Translator', 50000, 7);

-- Insert Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Connor', 'Jameson', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Zack', 'OBrian', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Emily', 'Marion', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'James', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Stan', 'Smith', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Anderson', 6, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mark', 'Arlo', 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Shannon', 'Lambert', 7, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Camie', 'Brooks', 5, 1);