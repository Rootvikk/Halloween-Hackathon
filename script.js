const costumeIdeas = [
    "a spooky ghost", 
    "a mysterious witch", 
    "a classic vampire", 
    "a friendly skeleton"
];

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer p");
    const costume = costumeIdeas[Math.floor(Math.random() * costumeIdeas.length)];
    footer.textContent += ` Maybe you could go as ${costume} this year!`;
});
