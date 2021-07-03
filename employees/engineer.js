const Employee = require('./employee')

class Engineer extends Employee {
    constructor(id, name, email, github){
        const id = id;
        const name = name;
        const email = email;

        super(id, name, email)
        this.github = github;
    }

    getGithub() {
        return `http://github.com/${this.github}`
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;