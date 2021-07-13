function addEmployees() {
        console.log('building team')
        for (let e = 0; e < currentTeam.length; e++) {
            switch (currentTeam[e].role) {
                case "Manager":
                    fs.appendFile("../assets/new.html", `\n<div class="card text-center" style="width: 17rem">
                    <div class="card-header bg-dark text-white">
                        <h4>${currentTeam[e].name}</h4>
                        <h4>${currentTeam[e].role}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${currentTeam[e].id}</li>
                            <li class="list-group-item">Email: ${currentTeam[e].email}</li>
                            <li class="list-group-item">Office Number: ${currentTeam[e].officeNumber}</li>
                        </ul>
                    </div>
                </div>`)
                break;
                case "Intern":
                    fs.appendFile("../assets/new.html", `\n<div class="card text-center" style="width: 17rem">
                    <div class="card-header bg-dark text-white">
                        <h4>${currentTeam[e].name}</h4>
                        <h4>${currentTeam[e].role}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${currentTeam[e].id}</li>
                            <li class="list-group-item">Email: ${currentTeam[e].email}</li>
                            <li class="list-group-item">School: ${currentTeam[e].school}</li>
                        </ul>
                    </div>
                </div>`)
                break;
                case "Engineer":
                    fs.appendFile("../assets/new.html", `\n<div class="card text-center" style="width: 17rem">
                    <div class="card-header bg-dark text-white">
                        <h4>${currentTeam[e].name}</h4>
                        <h4>${currentTeam[e].role}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${currentTeam[e].id}</li>
                            <li class="list-group-item">Email: ${currentTeam[e].email}</li>
                            <li class="list-group-item">GitHub: ${currentTeam[e].github}</li>
                        </ul>
                    </div>
                </div>`)
                break
                }
            }
        if (e = currentTeam.length) {
            fs.append("../assets/new.html", `\n   </div>
            </body>
            </html>`)
        }
    }