const images = [
    "image01.png",
    "image02.png",
    "image03.png",
    "image04.png",
    "image05.png",
    "image06.png",
    "image07.png",
    "image08.png",
    "image09.png",
    "image10.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);