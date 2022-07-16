/** Pure Function (Basic Example) */
function sum(a,b) {
    /** Based on param variables only output will come */
    return a+b;
}

console.log(sum(10,20))

/** Im Pure Function (Basic Example) */
let pokeApiData = []
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
function getPokeApiData() {
    /** Creating request */
    let req = new XMLHttpRequest();

    /** mention type of  request and add url */
    req.open("GET", URL);

    /** Once request done u will get the data by using onload method */
    req.onload = function () {
        if (req.status == 200) {
            data = JSON.parse(req.response);
            pokeApiData = data.results
        } else {
            pokeApiData = []
            console.log('Error got occured')
        }
    };
    /** call the request by using send method */
    req.send();
}

getPokeApiData();