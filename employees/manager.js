const Employee = require('./employee')

class Manager extends Employee {
    constructor(id, name, email, officeNumber){
        const id = id;
        const name = name;
        const email = email;

        super(id, name, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;