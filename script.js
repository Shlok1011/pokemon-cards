let apiLink = "https://pokeapi.co/api/v2/pokemon/?limit=1000";

let container = document.querySelector(".container");

async function getUrl() {
    try {
        let res = await axios.get(apiLink); 
        let pokemons = res.data.results;     

        for (let pokemon of pokemons) {
            let name = pokemon.name;
            imgUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
            let resp = await axios.get(imgUrl);
            let img = resp.data.sprites.front_default;
            createCard(name,img); 
        }
    } catch (error) {
        console.error('Error fetching data from the API:', error);
    }
}

// Function to create a card
function createCard(name,img) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Create a card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = name; // Set the title of the card to the pokemon's name
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    const cardContent = document.createElement("img");
    cardContent.setAttribute("src",img); // Set the content of the card
    cardBody.appendChild(cardContent);

    // Append the card to the container
    container.appendChild(card);
}

// Example: Call getUrl() to trigger the API call and card creation
getUrl();
