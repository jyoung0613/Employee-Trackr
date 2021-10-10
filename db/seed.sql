
-- to populate the tables with some data...

-- For employees table
INSERT INTO employees(first_name, last_name, role_id) VALUES ('Walter', 'Skinner', 10);
INSERT INTO employees(first_name, last_name, role_id) VALUES ('Dana', 'Scully', 6);
INSERT INTO employees(first_name, last_name, role_id) VALUES ('Fox', 'Mulder', 3);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Monica', 'Reyes', 9, 2);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Alex', 'Krycek', 5, 3);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Melvin', 'Frohike', 4, 3);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Cassandra', 'Spender', 7, 2);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Richard', 'Langley', 7, 2);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Eugene', 'Tooms', 8, 2);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('John', 'Byers', 2, 1);



--For roles table
INSERT INTO roles (title, salary, department_id) VALUES ('Staffing', 60000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Health and Safety', 70000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Head of HR', 90000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 80000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Accounting Assistant', 45000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Head Accountant', 100000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Sr.Engineer', 80000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Jr. Engineer', 60000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Engineering Intern', 45000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Lead Engineer', 110000, 2);




-- For departments table
INSERT INTO departments (dept_name) VALUES ('Human Resources');
INSERT INTO departments (dept_name) VALUES ('Engineering');
INSERT INTO departments (dept_name) VALUES ('Accounting');



