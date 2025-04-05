let posX = 0;
let posY = 0;
let velocityX = 5;
let velocityY = 5;
let animationInterval;
 
//Lancement du B52 Bazelgeuse
function Bazelgeuse() {
    document.getElementById("BazelgeuseAudio").play();
    document.getElementById("BazelgeuseButton").style.display = "none";
    document.getElementById("PauseButton").style.display = "block";
    document.getElementById("BazelgeuseContainer").style.display = "block";
    animation();
}
function animation() {
    const img = document.getElementById("BazelgeuseContainer").querySelector("img");
    const screenWidth = window.innerWidth; // Get screen width
    const screenHeight = window.innerHeight; // Get screen height
    const imgWidth = img.offsetWidth; // Get image width
    const imgHeight = img.offsetHeight; // Get image height

    animationInterval = setInterval(() => {
        // Update positions
        posX += velocityX;
        posY += velocityY;

        //Verification de colision avec les bords de l'écran
        if (posX <= 0 || posX >= screenWidth - imgWidth) {
            velocityX = -velocityX;
        }
        if (posY <= 0 || posY >= screenHeight - imgHeight) {
            velocityY = -velocityY;
        }
        img.style.transform = `translate(${posX}px, ${posY}px)`;
    }, 20); //Vitesse de l'animation
}
function pause() {
        clearInterval(animationInterval)
        posX = 0;
        posY = 0;
        const img = document.getElementById("BazelgeuseContainer").querySelector("img");
        img.style.transform = "translate(0, 0)";
        document.getElementById("BazelgeuseContainer").style.display = "none";
        document.getElementById("PauseButton").style.display = "none";
        document.getElementById("BazelgeuseButton").style.display = "block";
        document.getElementById("BazelgeuseAudio").pause();
        document.getElementById("BazelgeuseAudio").currentTime = 0;
}