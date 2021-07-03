const Employee = require('./employee')

class Intern extends Employee {
    constructor(id, name, email, school){
        const id = id;
        const name = name;
        const email = email;

        super(id, name, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;