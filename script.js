function getJoke() {
    const body = document.body;
    fetch(`https://v2.jokeapi.dev/joke/Programming`)
        .then((response) => {
            if (!response.ok) {
                throw new Error`Joke not found`();
            }
            return response.json();
        })
        .then((data) => {
            body.innerHTML = `
        <h1>Random Joke Generator</h1>
        <div class="container">
            <div class="joke">
               <p><strong>Joke : </strong> ${data.joke} </p>
               <p><strong>Setup : </strong> ${data.setup} </p>
               <p><strong>Delivery : </strong> ${data.delivery} </p>
            </div>
            <button class= "btn" onclick="window.location.reload()">Generate Random Joke</button>
        </div>`;
        })
        .catch((error) => {
            body.innerHTML = `Error ${error.message}`;
        });
}
getJoke();