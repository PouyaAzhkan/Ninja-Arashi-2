var lifeCounter = 0;
lifeNum.innerHTML = lifeCounter;
var starCounter = 0;
starNum.innerHTML = starCounter;
var coinCounter = 0;
coinNum.innerHTML = coinCounter;

const starsPos = [10, 20, 40];
star1.style.left = starsPos[0] + "%";
star2.style.left = starsPos[1] + "%";
star3.style.left = starsPos[2] + "%";

// star colision
function starColision() {
   if (
      player.getBoundingClientRect().x + player.getBoundingClientRect().width >= star1.getBoundingClientRect().x
      && player.getBoundingClientRect().x <= star1.getBoundingClientRect().x + star1.getBoundingClientRect().width && playerBottom <= 45
   ) {
      star1.classList.add("hide");
      starCounter += 1;
      starNum.innerHTML = starCounter;
      starSound.play();
   }
   else if (
      player.getBoundingClientRect().x + player.getBoundingClientRect().width >= star2.getBoundingClientRect().x
      && player.getBoundingClientRect().x <= star2.getBoundingClientRect().x + star2.getBoundingClientRect().width && playerBottom <= 45
   ) {
      star2.classList.add("hide");
      starCounter += 1;
      starNum.innerHTML = starCounter;
      starSound.play();
   }
   else if (
      player.getBoundingClientRect().x + player.getBoundingClientRect().width >= star3.getBoundingClientRect().x
      && player.getBoundingClientRect().x <= star3.getBoundingClientRect().x + star3.getBoundingClientRect().width && playerBottom <= 45
   ) {
      star3.classList.add("hide");
      starCounter += 1;
      starNum.innerHTML = starCounter;
      starSound.play();
   }
}
// star colision end

// enemy1 colision
function enemy1KillColision() {
   if (
      player.getBoundingClientRect().x + player.getBoundingClientRect().width >= enemy1.getBoundingClientRect().x
      && player.getBoundingClientRect().x <= enemy1.getBoundingClientRect().x + enemy1.getBoundingClientRect().width
   ) {
      enemy1.className = ("dead");
      deadSound.play();

      setTimeout(() => {
         enemy1.className = "hide";
      }, 1500);
   }
}
// enemy1 colision end

function allColisions() {
   starColision();
}

