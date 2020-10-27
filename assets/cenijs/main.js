/* SALVO LE MIE API IN UN ARRAY */
const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
];

/* SALVO ALCUNI ELEMENTI IN DELLE VARIABILI: CONTAINER, TEMPLATE e BUTTON AGGIUNGI */
const container = document.getElementById('container');
const tmpl = document.getElementById('listaPersonaggi');
const btnAdd = document.getElementById('personaggiBtn');

/*CREO LA CLASSE CARD */
class Card {
    static async loadHandler(){
        //Salvo le mie API in degli oggetti
        const [characters, locations, episodes] = await Promise.all(urls.map(url =>{
            try{
                return fetch(url).then(response => response.json());
            }
            catch (err){
                return err;
            };
        }))

        //Costruisco dinamicamente le singole card e le inserisco nell'HTML
        characters.results.map(char =>{
            const cardChar = document.importNode(tmpl.content, true);

            // "Challgenge"
            let numEpisodes = 0;
            episodes.results.filter(episodes => {
                if (episodes.characters.includes(char.url))
                    numEpisodes++;

                cardChar.getElementById('numE').textContent = 'presente in: ' + numEpisodes + ' episodi';
            })  

            cardChar.getElementById('numE').textContent = 'presente in: ' + char.episode.length + ' episodi'
            cardChar.querySelector('h2').textContent = char.name;
            cardChar.querySelector('strong').textContent = 'specie: ' + char.species;
            cardChar.querySelector('img').setAttribute('src', char.image)
            cardChar.querySelector('img').setAttribute('alt', char.name)
            cardChar.querySelector('i').classList.add('fa', 'fa-television')
            cardChar.querySelector('span').textContent = (char.type) ? `tipo: ${char.type}` : `tipo: Common Character`
            cardChar.getElementById('removeBtn').textContent = 'rimuovi Card';
            return container.appendChild(cardChar);
        }
            )

    }

    
}
/* Eseguo addEventListener */
    btnAdd.addEventListener('click', Card.loadHandler);
