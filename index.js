const teamBuilder = require('./employees/teamBuilder')

const team = new teamBuilder();

team.build();

// Ask for manager info (name, id, email)
// Ask for employee title to add (Intern, Engineer, or no more members)
// Add relevant info for each team member through Inquirer
// Append info for each team member into an array of objects
// Write HTML using bootstrap to create a Team webpage
// Loop through the array and use switch case depending on the "role" of each employee
// Depending on the employee "role", use corresponding constructor
// Append each employee as their own "Card" on the webpage