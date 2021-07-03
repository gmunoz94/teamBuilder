const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const inquirer = require("inquirer")

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
                    
                }
            ])
    }
}


module.exports = teamBuilder;