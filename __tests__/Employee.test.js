const Employee = require('../employees/employee')

describe('Employee.getName'), () => {
    it('Should retrieve the Name input into the Constructor', () => {
        expect(Employee(["ID", "Name", "Email"]).getName()).toBe('Name')
    })
}