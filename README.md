# Javascript Pure Vs Impure Functions | Koseksi 

## Pure Functions
- Pure Functions are not dependent on other services or libraries
- In pure functions we won't update the out side variable and dependent on parameter variables.
- We can't use outside variables in side functions.
- Becaues of pure functions only the performance will be increased.
- And a pure functions are only for basic logics.
- If you add api calls inside function those functions not called as pure functions.
- based on parameters only will return output. And always gives same output.

## Im Pure Functions
- Im Pure Functions are dependent on other services and libraries
- In Im Pure functions we can use or update the out side variable.
- We can use outside variables and api calls in side functions.
- Im pure functions have side effects and defects.It will decrease the performance.
- We can add any logic inside Im pure functions.


### Example (Pure Functions)
```bash
  function sum(a,b) {
      /** Based on param variables only output will come */
      return a+b;
  }

  console.log(sum(10,20))
```

### Example (Impure Functions)
```bash
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
  
```