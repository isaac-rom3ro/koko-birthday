const buttonGift = document.getElementById("button-gift");
buttonGift.addEventListener("click", () => {
    const birthdayMusic = new Audio("./music/doraemon-music.mp3");
    birthdayMusic.volume = 0.15;
    birthdayMusic.currentTime = 73;
    birthdayMusic.play();

    let giftContainer = document.getElementById("gift-container");
    let clickMessage = document.getElementById("click-me");
    clickMessage.replaceChildren();
    giftContainer.replaceChildren();

    const gifBro = document.createElement("img");
    gifBro.src = "https://media2.giphy.com/media/SGAh7OmkAtJHQvtzb8/giphy.gif?cid=6c09b952ztod7wdh8vwuy2uvjoa7bgqiuk39g8efiveufgcr&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    const anotherGif = document.createElement("img");
    anotherGif.src = "https://media1.giphy.com/media/33OrjzUFwkwEg/200.gif?cid=6c09b952ztod7wdh8vwuy2uvjoa7bgqiuk39g8efiveufgcr&ep=v1_gifs_search&rid=200.gif&ct=g";

    const headerMessageToBro = document.createElement("p");
    headerMessageToBro.classList = "long-phrase";
    headerMessageToBro.textContent = "🌟✨ Happy Birthday! ✨🌟";

    const messageToMyBroo = document.createElement("p");
    messageToMyBroo.classList = "long-phrase";
    messageToMyBroo.textContent = "You're the smartest, cutest, and funniest person ever! Thanks for always making me laugh, think, and sometimes get amazed by your brilliance 😂.";

    const loveuBro = document.createElement("p");
    loveuBro.classList = "love-bro";
    loveuBro.textContent = "HAPPY 24YEARS OF GLORY, LOVE U BRAAAHHH!";


    giftContainer.appendChild(gifBro);
    giftContainer.appendChild(anotherGif);
    giftContainer.appendChild(headerMessageToBro);
    giftContainer.appendChild(messageToMyBroo);
    giftContainer.appendChild(loveuBro);
});
