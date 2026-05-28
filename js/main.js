// intro sound
introSound.play();

// make play button with delay
setTimeout(
    () => {
        play.style.visibility = "visible";
        play.style.opacity = "1";
    }
    , 2000
);

// play button
play.onclick = function () {
    clickSound.play();
    introScene.classList.add("hide");
    introVideo.play();
    introVideo.addEventListener("ended", () => {
        introVideo.pause();
        introVideoHolder.classList.add("hide");
        windSound.play();
        windSound.loop = true;
    });
    introVideoHolder.classList.remove("hide");
}

// intro video onclick
introVideo.onclick = function () {
    windSound.play();
    windSound.loop = true;
    introVideo.pause();
    introVideoHolder.classList.add("hide");
}

// click sound
var menuItem = document.querySelectorAll(".scale");
meniItemSound = function (num) {
    clickSound.play();
}

// music play pause button
musicBg = 0;

musicBtn.onclick = function () {
    if (musicBg == 0) {
        musicBtn.style.background = "url(assets/img/home/settingMenu/musicOff.png) no-repeat";
        musicBtn.style.backgroundSize = "100% 100%";
        musicBg = 1;
        windSound.pause();
    }
    else if (musicBg == 1) {
        musicBtn.style.background = "url(assets/img/home/settingMenu/musicOn.png) no-repeat";
        musicBtn.style.backgroundSize = "100% 100%";
        musicBg = 0;
        windSound.play();
        windSound.loop = true;
    }
}

// hide home pages
homeBtn.onclick = function () {
    artifact.classList.add("hide");
    story.classList.add("hide");
    shop.classList.add("hide");
    skills.classList.add("hide");
    this.classList.add("hide");
    clickSound.play();
}

// open home pages
storyBtn.onclick = function () {
    story.classList.remove("hide");
    homeBtn.classList.remove("hide");
}

artifactBtn.onclick = function () {
    artifact.classList.remove("hide");
    homeBtn.classList.remove("hide");
}

shopBtn.onclick = function () {
    shop.classList.remove("hide");
    homeBtn.classList.remove("hide");
}

skillsBtn.onclick = function () {
    skills.classList.remove("hide");
    homeBtn.classList.remove("hide");
}
// open home pages end

// setting hide and show
settingFlag = "Hide";
settingHideShow = function () {
    if (settingFlag == "Hide") {
        setting.classList.remove("hide");
        settingFlag = "Show";
    }
    else if (settingFlag == "Show") {
        setting.classList.add("hide");
        settingFlag = "Hide";
    }
}

// info hide and show
infoFlag = "Hide";
infoHideShow = function () {
    if (infoFlag == "Hide") {
        info.classList.remove("hide");
        infoFlag = "Show";
    }
    else if (infoFlag == "Show") {
        info.classList.add("hide");
        infoFlag = "Hide";
    }
}

// slider
sliderPos = 0;
actNumber = 1;

// slider left button
sliderBtnLeft.onclick = function () {
    if (sliderPos > -300) {
        sliderPos = sliderPos - 100;
        imgGallery.style.left = sliderPos + "%";
        levelGallery.style.left = sliderPos + "%";
        actNumber = actNumber + 1;
        act.innerHTML = "ACT" + " " + actNumber;
    }
}

// slider right button
sliderBtnRight.onclick = function () {
    if (sliderPos < 0) {
        sliderPos = sliderPos + 100;
        imgGallery.style.left = sliderPos + "%";
        levelGallery.style.left = sliderPos + "%";
        actNumber = actNumber - 1;
        act.innerHTML = "ACT" + " " + actNumber;
    }
}

// ---------- gameplay ----------
// disable all actions
var disableActions = true;

gamePlayMusic.volume = 0.5;
gamePlayMusic.loop = true;

gameLevel1.onclick = function () {
    windSound.pause();
    homeBtn.classList.add("hide");
    home.classList.add("hide");
    story.classList.add("hide");
    gamePlay.classList.remove("hide");
    loadingSound.play();
    setTimeout(() => {
        home.classList.add("hide");
        loading2.classList.add("hide");
        gamePlayMusic.play();
        loadingSound.pause();
        disableActions = false;
    }, 5500)
}

restartGame = function () {
    location.reload();
}

// dead menu
deadMenuHideShow = function () {
    deadMenu.classList.remove("hide");
    menuHolder.classList.remove("hide");
    menuHolder.style.background = "rgba(0, 0, 0)";
    playGround.classList.add("hide");
    disableActions = true;
}

// dead function
dead = function () {
    deadSound.play();
    player.className = "dead";
    setTimeout(() => {
        deadMenuHideShow();
    }, 500);
}

// finish menu

finishMenuHideShow = function () {
    finishMenu.classList.remove("hide");
    menuHolder.classList.remove("hide");
    menuHolder.style.background = "rgba(0, 0, 0)";
    disableActions = true;
}

// game setting menu
var gameSettingMenuFlag = 0;

gameMenuHideShow = function () {
    if (gameSettingMenuFlag == 0) {
        gameSettingBtn.classList.add("hide");
        gameSettingMenu.classList.remove("hide");
        menuHolder.classList.remove("hide");
        gameSettingMenuFlag = 1;
    }
    else if (gameSettingMenuFlag == 1) {
        gameSettingBtn.classList.remove("hide");
        gameSettingMenu.classList.add("hide");
        menuHolder.classList.add("hide");
        gameSettingMenuFlag = 0;
    }
    clickSound.play();
}

// game music play and pause
var gamePlayMusicFlag = 0;

gameMusicBtn.onclick = function () {
    if (gamePlayMusicFlag == 0) {
        gameMusicBtn.style.background = "url(assets/img/gamePlay/pauseMenu/musicOff.png) no-repeat";
        gameMusicBtn.style.backgroundSize = "100% 100%";
        gamePlayMusicFlag = 1;
        gamePlayMusic.pause();
    }
    else if (gamePlayMusicFlag == 1) {
        gameMusicBtn.style.background = "url(assets/img/gamePlay/pauseMenu/musicOn.png) no-repeat";
        gameMusicBtn.style.backgroundSize = "100% 100%";
        gamePlayMusicFlag = 0;
        gamePlayMusic.play();
    }
}

mainMenuBtn.onclick = function () {
    alert("test");
}

// game setting menu end

// ---------- gameplay end ----------