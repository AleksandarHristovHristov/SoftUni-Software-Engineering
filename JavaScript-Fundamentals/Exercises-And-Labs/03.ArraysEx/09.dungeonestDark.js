function dungeonestDark(rooms){
let healthPoints = 100;
let coins = 0;
rooms = rooms[0];
let arr = [];
arr = rooms.split("|");
let isDead = false;
let damageTaken = 0;

for (let i = 0; i < arr.length; i++) {
    let room = '';
    room = arr[i];

    if (room.includes('potion')) {
        room = room.split(' ');
        healthPoints  = healthPoints + Number(room[1]);
        if (healthPoints > 100) {
            healthPoints = 100;
            console.log(`You healed for ${damageTaken} hp.`)
            console.log(`Current health: ${healthPoints} hp.`);
            damageTaken = 0;
        } else {
            console.log(`You healed for ${room[1]} hp.`)
            console.log(`Current health: ${healthPoints} hp.`);
        } 
    }
    else if (room.includes('chest')) {
      room = room.split(' ');
      coins = coins + Number(room[1]);
      console.log(`You found ${room[1]} coins.`);  
    }
    else {
      room = room.split(' ');
      damageTaken = Number(room[1]);
      healthPoints = healthPoints - damageTaken;
      let monsterName = room[0];
      
      if (healthPoints <= 0) {
          isDead = true;
        console.log(`You died! Killed by ${monsterName}.`);
        console.log(`Best room: ${i + 1}`);
        break;
    }
      console.log(`You slayed ${monsterName}.`); 
    } 
}
if (!isDead) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${healthPoints}`);
}

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);