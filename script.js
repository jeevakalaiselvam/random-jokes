const APIURL = "https://official-joke-api.appspot.com/random_joke";

const container = document.getElementById("container");

async function getAJoke() {
    const response = await fetch(APIURL);
    const responseData = await response.json();

    const jokeCard = document.createElement("div");
    jokeCard.classList.add("joke-card");
    jokeCard.innerHTML = `
    <div class="joke-card" id="joke-card">
                <h1>Joke</h1>
                <p>This is </p>
            </div>
    `;

    container.appendChild(jokeCard);
}

getAJoke();
