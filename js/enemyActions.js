var enemyFlipPos = false;

var enemyPos = [85];
enemy1.style.left = enemyPos[0] + "%";

setInterval(() => {
   if (enemyFlipPos == false) {
      enemy1.classList.add("enemyFlip");
      enemyFlipPos = true;
   }
   else if (enemyFlipPos == true) {
      enemy1.classList.remove("enemyFlip");
      enemyFlipPos = false;
   }
}, 3000);





