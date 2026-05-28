// ---------- player actions ----------

var playGroundPos = 0;
var playerPos = 0;
var playerBottom = 45;
var playerCondition = "isRight";

// go right
groundGoRight = function () {
   if (playGroundPos < -315 && playerBottom <= 17) {
      playGroundPos = playGroundPos + 0.6;
      stage1.style.left = playGroundPos + "%";
   }
   else if (playGroundPos < 0 && playerBottom > 17) {
      playGroundPos = playGroundPos + 0.6;
      stage1.style.left = playGroundPos + "%";
   }
}

playerWalkRight = function () {
   if (playerPos < 65) {
      playerPos = playerPos + 0.1;
      player.style.left = playerPos + "%";
      player.classList.add("walkRight");
      player.style.background = "url(assets/img/gamePlay/player/walkRight/01.png)";
      player.style.backgroundSize = "contain";
      walkSound.play();
      walkSound.loop = true;
      playerCondition = "isRight";

      if (playerPos > 40 && playerBottom >= 40) {
         playerBottom = playerBottom - 0.3;
         player.style.bottom = playerBottom + "%";
      }
      else if (playerPos >= 53) {
         playerBottom = 17;
         player.style.bottom = playerBottom + "%";
      }
   }
   else if (playerPos >= 65) {
      endSound.play();
      setTimeout(() => {
         finishMenuHideShow();
      }, 1000);
   }
   allColisions();
}

goRight.onmousedown = function () {
   playerWalkRight();
   groundGoLeft();
}

goRight.onmouseup = function () {
   player.className = "breath";
   walkSound.pause();
}
// go right end

// go left
groundGoLeft = function () {
   if (playGroundPos > -400) {
      playGroundPos = playGroundPos - 0.6;
      stage1.style.left = playGroundPos + "%";
   }
}

playerWalkLeft = function () {
   if (playerPos > 51 && playerBottom <= 17) {
      playerPos = playerPos - 0.1;
      player.style.left = playerPos + "%";
      player.classList.add("walkLeft");
      player.style.background = "url(assets/img/gamePlay/player/walkLeft/01.png)";
      player.style.backgroundSize = "contain";
      walkSound.play();
      walkSound.loop = true;
      playerCondition = "isLeft";
   }
   else if (playerPos > -2 && playerBottom > 17) {
      playerPos = playerPos - 0.1;
      player.style.left = playerPos + "%";
      player.classList.add("walkLeft");
      player.style.background = "url(assets/img/gamePlay/player/walkLeft/01.png)";
      player.style.backgroundSize = "contain";
      walkSound.play();
      walkSound.loop = true;
      playerCondition = "isLeft";

      if (playerPos <= 40 && playerBottom < 45) {
         playerBottom = playerBottom + 0.3;
         player.style.bottom = playerBottom + "%";
      }
   }

   else if (playerPos <= -2) {
      dead();
   }

   allColisions();
}

goLeft.onmousedown = function () {
   playerWalkLeft();
   groundGoRight();
}

goLeft.onmouseup = function () {
   player.className = "breath";
   walkSound.pause();
}
// go left end

// throw shuriken
killBtn.onclick = function () {
   playerThrowShuriken();
   throwShuriken();
}

playerThrowShuriken = function () {
   if (playerCondition == "isLeft") {
      player.classList.add("playerThrowShurikenLeft");
      setTimeout(() => {
         player.classList.remove("playerThrowShurikenLeft");
      }, 200);
   }
   else {
      player.classList.add("playerThrowShurikenRight");
      setTimeout(() => {
         player.classList.remove("playerThrowShurikenRight");
      }, 500);
   }
}

throwShuriken = function () {
   if (playerCondition == "isLeft") {
      shuriken.classList.add("throwShurikenLeft");
      shuriken.classList.remove("hide");
      setTimeout(() => {
         shuriken.classList.remove("throwShurikenLeft");
         shuriken.classList.add("hide");
      }, 400);
   }
   else {
      shuriken.classList.add("throwShurikenRight");
      shuriken.classList.remove("hide");
      setTimeout(() => {
         shuriken.classList.remove("throwShurikenRight");
         shuriken.classList.add("hide");
      }, 400);
   }
   shurikenSound.play();
}

// throw shuriken end

// jump
jumping = function () {
   if (playerCondition == "isLeft") {
      player.classList.add("jumpLeft");
      setTimeout(() => {
         player.classList.remove("jumpLeft");
      }, 500);
   }
   else if (playerCondition == "isRight") {
      player.classList.add("jumpRight");
      setTimeout(() => {
         player.classList.remove("jumpRight");
      }, 500);
   }

   jumpSound.play();
   playerBottom = playerBottom + 0.1;
   setTimeout(() => {
      playerBottom = playerBottom - 0.1;
   }, 500);
}

jumpBtn.onclick = function () {
   jumping();
}
// jump end

// double jump
doubleJumping = function () {
   player.classList.add("doubleJump");
   setTimeout(() => {
      player.classList.remove("doubleJump");
   }, 1000);
   jumpSound.play();
   if ((playerPos >= 50 && playerPos <= 52) && playerBottom >= 17) {
      playerBottom = 39.9;
      player.style.bottom = playerBottom + "%";
   }
   else if (playerPos >= 24 && playerPos <= 36.5) {
      setTimeout(() => {
         dead();
      }, 400);
   }

   playerBottom = playerBottom + 0.5;
   setTimeout(() => {
      playerBottom = playerBottom - 0.5;
   }, 1000);
}

jumpBtn.ondblclick = function () {
   doubleJumping();
}
// double jump end

// fastkill
fastKillBtn.onclick = function () {
   fastKill();
}

fastKill = function () {
   if (playerPos < 65 && playerCondition == "isRight") {
      player.classList.add("fastKillRight");
      setTimeout(() => {
         player.classList.remove("fastKillRight");
      }, 500);
      playerPos = playerPos + 0.3;
      player.style.left = playerPos + "%";
      playGroundPos = playGroundPos - 1.3;
      stage1.style.left = playGroundPos + "%";
      fastKillSound.play();
   }

   else if (playerPos > 0 && playerCondition == "isLeft") {
      player.classList.add("fastKillLeft");
      setTimeout(() => {
         player.classList.remove("fastKillLeft");
      }, 500);
      playerPos = playerPos - 0.3;
      player.style.left = playerPos + "%";
      playGroundPos = playGroundPos + 1.3;
      stage1.style.left = playGroundPos + "%";
      fastKillSound.play();
   }

   enemy1KillColision();
}
// fastkill  end

// hide and show
hideShowBtn.onclick = function () {
   hideAndShow();
}

var hideShowPos = "isShow";
hideAndShow = function () {
   if (hideShowPos == "isShow") {
      hideShowPos = "isHide";
      hsProgress.classList.remove("hide");
      hsBar.classList.add("progressDown");
      hideShowBtn.classList.remove("disable");
      player.classList.add("hidePlayer");
      // pause animation
      setTimeout(() => {
         player.classList.add("pauseAnim");
      }, 900);
      // show after 5 seconds
      setTimeout(() => {
         hideShowPos = "isShow";
         hsProgress.classList.add("hide");
         player.classList.remove("hidePlayer");
         player.classList.remove("pauseAnim");
      }, 5000);
      hideOtherBtns();
      hideShowSound.play();
   }
   else if (hideShowPos == "isHide") {
      hideShowPos = "isShow";
      hsProgress.classList.add("hide");
      hsBar.classList.remove("progressDown");
      hideShowBtn.classList.add("disable");
      player.classList.remove("hidePlayer");
      player.classList.remove("pauseAnim");
      hideOtherBtns();
      setTimeout(() => {
         hideShowBtn.classList.remove("disable");
      }, 5000);
      hideShowSound.play();
   }
}

actionBtnStatus = "isShow";
hideOtherBtns = function () {
   if (actionBtnStatus == "isShow") {
      actionBtnStatus = "isHide";
      killBtn.classList.add("hidden");
      fastKillBtn.classList.add("hidden");
      jumpBtn.classList.add("hidden");
      setTimeout(() => {
         actionBtnStatus = "isShow";
         killBtn.classList.remove("hidden");
         fastKillBtn.classList.remove("hidden");
         jumpBtn.classList.remove("hidden");
      }, 5000);
   }
   else if (actionBtnStatus == "isHide") {
      actionBtnStatus = "isShow";
      killBtn.classList.remove("hidden");
      fastKillBtn.classList.remove("hidden");
      jumpBtn.classList.remove("hidden");
   }
}
// hide and show end

// keybord keys
document.onkeydown = function (e) {
   // right btn
   if ((e.keyCode == "39" || e.keyCode == "68") && disableActions == false && hideShowPos == "isShow") {
      groundGoLeft();
      playerWalkRight();
   }
   // left btn
   else if ((e.keyCode == "37" || e.keyCode == "65") && disableActions == false && hideShowPos == "isShow") {
      groundGoRight();
      playerWalkLeft();
   }

   // kill btn
   else if (e.keyCode == "70" && disableActions == false && hideShowPos == "isShow") {
      playerThrowShuriken();
      throwShuriken();
   }

   // hide
   else if ((e.keyCode == "40" || e.keyCode == "83") && disableActions == false && hideShowPos == "isShow") {
      hideAndShow();
   }

   // jump btn
   else if ((e.keyCode == "38" || e.keyCode == "87") && disableActions == false && hideShowPos == "isShow") {
      jumping();
   }

   // double jump btn
   else if (e.keyCode == "32" && disableActions == false && hideShowPos == "isShow") {
      doubleJumping();
   }

   // fast kill btn
   else if (e.keyCode == "16" && disableActions == false && hideShowPos == "isShow") {
      fastKill();
   }
}

document.onkeyup = function (e) {
   // right btn
   if (e.keyCode == "39" || e.keyCode == "68") {
      player.className = "breath";
      walkSound.pause();
   }
   // left btn
   else if (e.keyCode == "37" || e.keyCode == "65") {
      player.className = "breath";
      walkSound.pause();
      // dead();
   }
}
// keybord keys end

// ---------- player actions end ----------




