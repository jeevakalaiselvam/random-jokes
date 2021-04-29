const APIURL = "https://official-joke-api.appspot.com/random_joke";

const container = document.getElementById("container");

async function getAJoke() {
    const response = await fetch(APIURL);
    const responseData = await response.json();
    console.log(responseData);

    const jokeCard = document.createElement("div");
    jokeCard.classList.add("joke-card");
    jokeCard.innerHTML = "";
    jokeCard.innerHTML = `
                <i class="fas fa-sync-alt rotating hidden" id="rotate"></i>
                <p>${responseData.setup}</p>
                <p>${responseData.punchline}</p>
            <button class="btn" id="joke-next">GET JOKE</button>
    `;

    container.innerHTML = "";
    container.appendChild(jokeCard);

    const jokeBtn = document.getElementById("joke-next");
    const rotateIcon = document.getElementById("rotate");

    jokeBtn.addEventListener("click", () => {
        jokeCard.innerHTML = `
        <i class="fas fa-sync-alt rotating active" id="rotate"></i>`;
        getAJoke();
    });
}

getAJoke();
