INSERT INTO department (name) VALUES ('Design');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES ('Graphics', 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Economist', 70000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Analysis', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Connor', 'Jameson', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Zack', 'OBrian', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Emily', 'Marion', 3, NULL);
