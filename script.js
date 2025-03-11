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

    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = name;
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    const cardContent = document.createElement("img");
    cardContent.setAttribute("src",img);
    cardBody.appendChild(cardContent);


    container.appendChild(card);
}


getUrl();
