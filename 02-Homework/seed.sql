USE tracker_db


INSERT INTO department (departments)
VALUES ('Sales');
INSERT INTO department (departments)
VALUES ('Engineering');
INSERT INTO department (departments)
VALUES ('Finance');
INSERT INTO department (departments)
VALUES ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES ('Lead', '100000', 1);
INSERT INTO roles (title, salary, department_id)
VALUES ('Developer', '50000', 2);
INSERT INTO roles (title, salary, department_id)
VALUES ('Intern', '250000', 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ('Zachary', 'Gibbs', 1)
INSERT INTO employees (first_name, last_name, role_id)
VALUES ('Riley', 'Tyler', 2)
INSERT INTO employees (first_name, last_name, role_id)
VALUES ('Tate', 'Riley', 3)
INSERT INTO employees (first_name, last_name, role_id)
VALUES ('Andrew', 'White', 4)




