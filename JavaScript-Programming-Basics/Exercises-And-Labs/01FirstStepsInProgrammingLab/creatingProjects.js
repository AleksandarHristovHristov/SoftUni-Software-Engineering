function creatingProjects(input) {
    let name = input[0];
    let numOfProjects = Number(input[1]);
    let requiredHours = numOfProjects * 3;
    console.log(`The architect ${name} will need ${requiredHours} hours to complete ${numOfProjects} project/s.`)
}