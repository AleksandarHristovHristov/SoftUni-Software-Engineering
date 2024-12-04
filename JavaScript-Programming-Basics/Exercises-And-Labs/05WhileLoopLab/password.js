function password(input){
    let index = 0
    const userName = input[index];
    index++;
    const password = input[index];
    index++;
    let inputPassword = input[index];
    index++;
    while (inputPassword != password) {
     inputPassword = input[index];
     index++;
    }
    console.log(`Welcome ${userName}!`);
}

password(["Gosho",
"secret",
"secret"])

