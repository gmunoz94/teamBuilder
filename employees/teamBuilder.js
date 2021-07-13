const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const inquirer = require("inquirer")
const appEmp = require('./script')
const fs = require('fs')

const currentTeam = [];

class teamBuilder {
    constructor() {
    }
    
    
    build() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team Manager's name?"
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the Manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Manager's office phone number?"
            }
            ])
            .then(val => {
                const newManager = new Manager(val.managerID, val.managerName, val.managerEmail, val.officeNumber)
                currentTeam.push({
                    role: newManager.getRole(),
                    id: newManager.id,
                    name: newManager.name,
                    email: newManager.email,
                    officeNumber: newManager.officeNumber
                })
                console.log(currentTeam)
                nextEmployee()
            })
        }                              
}
                    
function buildIntern() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "internName",
            message: "What is this employee's name?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is this employee's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is this employee's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
        }
    ])
    .then(val => {
        let newIntern = new Intern(val.internID, val.internName, val.internEmail, val.internSchool)
        currentTeam.push({
            role: newIntern.getRole(),
            id: newIntern.id,
            name: newIntern.name,
            email: newIntern.email,
            school: newIntern.getSchool()       
        })
        console.log(currentTeam)
        nextEmployee()
    })
}
                    
function nextEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeType",
                message: "Which employee would you like to add?",
                choices: ["Engineer", "Intern", "I am finished adding employeess"]
            }
        ])
        .then((val) => {
            if (val.employeeType == "Engineer") {
                buildEngineer();
            } else if (val.employeeType == "Intern") {
                buildIntern();
            } else {
                buildPage();
            }
            })
        .catch(error => {
            console.log(error)
        });
}

function buildEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is this employee's name?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is this employee's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is this employee's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is this engineer's GitHub username?"
        }
    ])
    .then(val => {
        let newEngineer = new Engineer(val.engineerID, val.engineerName, val.engineerEmail, val.engineerGithub)
        currentTeam.push({
            role: newEngineer.getRole(),
            id: newEngineer.id,
            name: newEngineer.name,
            email: newEngineer.email,
            github: newEngineer.getGithub()       
        })
        console.log(currentTeam)
        nextEmployee()
    })
}

function buildPage() {
    fs.writeFile('./assets/new.html', generateHTML, function(err, result) {
        if (err) console.log('error', err);
        else {
            console.log("hello")
            addEmployees()
        }
      });
    
}

var generateHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <title>Team Page</title>
</head>
<body>
    <div class="px-4 py-3 mb-5 text-center bg-dark text-white">
        <h1 class="display-5 fw-bold">Team Profiles</h1>
    </div>
    <div class="container d-flex flex-wrap justify-content-center" id="teamBlock">`

    function addEmployees() {
        console.log('building team')
        for (let e = 0; e < currentTeam.length; e++) {
            switch (currentTeam[e].role) {
                case "Manager":
                    fs.appendFile("./assets/new.html", `
    <div class="card text-center m-1" style="width: 17rem">
        <div class="card-header bg-dark text-white">
            <h4>${currentTeam[e].name}</h4>
            <h4>${currentTeam[e].role}</h4>
        </div>
        <div class="card-body text-left">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${currentTeam[e].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${currentTeam[e].email}">${currentTeam[e].email}</a></li>
                <li class="list-group-item">Office Number: <a href="tel:${currentTeam[e].officeNumber}">${currentTeam[e].officeNumber}</a></li>
            </ul>
        </div>
    </div>`, function(err, result) {
                        if (err) console.log('error', err);
                    });
                    break;
                case "Intern":
                    fs.appendFile("./assets/new.html", `
    <div class="card text-center m-1" style="width: 17rem">
        <div class="card-header bg-dark text-white">
            <h4>${currentTeam[e].name}</h4>
            <h4>${currentTeam[e].role}</h4>
        </div>
        <div class="card-body text-left">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${currentTeam[e].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${currentTeam[e].email}">${currentTeam[e].email}</a></li>
                <li class="list-group-item">School: ${currentTeam[e].school}</li>
            </ul>
        </div>
    </div>`, function(err, result) {
                        if (err) console.log('error', err);
                    });
                    break;
                case "Engineer":
                    fs.appendFile("./assets/new.html", `
    <div class="card text-center m-1" style="width: 17rem">
        <div class="card-header bg-dark text-white">
            <h4>${currentTeam[e].name}</h4>
            <h4>${currentTeam[e].role}</h4>
        </div>
        <div class="card-body text-left">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${currentTeam[e].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${currentTeam[e].email}">${currentTeam[e].email}</a></li>
                <li class="list-group-item">GitHub: <a href="${currentTeam[e].github}" target="_blank">${currentTeam[e].github}</a></li>
            </ul>
        </div>
    </div>`, function(err, result) {
                        if (err) console.log('error', err);
                    });
                    break;
                }
            }
        if (e = currentTeam.length) {
            fs.appendFile("./assets/new.html", `
    </div>
</body>
</html>`, function(err, result) {
                if (err) console.log('error', err);
            });
        }
    }

module.exports = teamBuilder;