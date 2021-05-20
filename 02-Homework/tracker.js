const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'Skater666!',
    database: 'tracker_db',
});



const start = () => {
    inquirer
        .prompt({
            name: 'main',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: ['Add Department', 'Add Role', 'Add Employee',
                'View Department', 'View Roles',
                'View Employees', 'Update Roles']
        }).then((answer) => {
            if (answer.main === 'Add Department') {
                addDepartment();
            } else if (answer.main === 'Add Role') {
                addRoles();
            } else if (answer.main === 'Add Employee') {
                addEmployee();
            } else if (answer.main === 'View Department') {
                deptSearch();
            } else if (answer.main === 'View Roles') {
                rolesSearch();
            } else if (answer.main === 'View Employees') {
                empSearch();
            } else if (answer.main === 'Update Roles') {
                updateRoles();
            }
        })

};


const addDepartment = () => {
    var questions = [
        {
            name: "department",
            type: "input",
            message: "Enter the Department title",

        }
    ]
    inquirer.prompt(questions).then(function (answer) {
        connection.query(
            `INSERT INTO department SET ?`,
            {
                departments: answer.department
            },
            function (error) {
                if (error) throw error;
                start();
            }

        )

    })

}

const addRoles = () => {
    var questions = [
        {
            name: "roles",
            type: "input",
            message: "Enter a new Role",
        },
        {
            name: "salary",
            type: "input",
            message: "What is this employee's salary?"
        },
        {
            name: "department",
            type: "input",
            message: "What department does this employee work in?"
        }
    ]
    inquirer.prompt(questions).then(function (answer) {
        connection.query(
            `INSERT INTO roles SET ?`,
            {
                title: answer.roles,
                salary: answer.salary,
                department_id: answer.department,
            },
            function (error) {
                if (error) throw error;
                start();
            })
    })
}

const addEmployee = () => {
    var questions = [{
        type: "input",
        message: "What is the employees first name?",
        name: "first_name"
    },
    {
        type: "input",
        message: "What is the employees last name?",
        name: "last_name"
    },
    {
        type: "input",
        message: "What is the employees role?",
        name: "role_id",
    },
    ];
    inquirer.prompt(questions).then(function (answer) {
        connection.query(
            `INSERT INTO employee SET ?`,
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                roles_id: answer.roles_id,
            },
            function (error) {
                if (error) throw error;
                start();
            }

        )

    })

}


function deptSearch() {
    connection.query("SELECT * from department", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
};

function rolesSearch() {
    connection.query("SELECT * from roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
};

function empSearch() {
    connection.query("SELECT * from employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
};


connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    start();
});
