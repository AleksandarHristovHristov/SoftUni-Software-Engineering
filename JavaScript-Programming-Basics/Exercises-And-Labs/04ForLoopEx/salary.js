function salary(input){
    let index = 0;
    let openTabs = input[index];
    index++;
    let salary = input[index];
    index++;
    let tempMoney = 0;
    let isHaveSalary = true;
    let spentMoney = 0;
    for (let i = 0; i < openTabs; i++) {
        let currentTab = input[index];
        index++;
        if (currentTab === "Facebook") {
            salary -=150;
            
        } else if (currentTab === "Instagram") {
            salary -=100;
        } else if (currentTab === "Reddit"){
            salary -=50;
        }
        if (salary <= 0) {
           //console.log(`You have lost your salary.`);
           isHaveSalary = false;
           break; 
        }
    }
    if (isHaveSalary) {
         console.log(`${salary}`);
    } else {
        console.log(`You have lost your salary.`);
    }
}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])



