# reactReviewWithPokemon

[![Node version](https://img.shields.io/badge/node-v8.12.0-blue.svg)](http://nodejs.org/download/)
[![NPM version](https://img.shields.io/badge/npm-6.4.1-blue.svg)](https://www.npmjs.com/get-npm/)

Get additional practice with React by creating a front end application that renders data from an image api.  This will require some knowledge on React

## Getting Started

### Clone
```
  $ git clone https://github.com/omegak911/reactReviewPictureCollection.git
  $ cd reactReviewPictureCollection
```

### Setup
```
  $ npm install
  $ npm start
  $ npm run build
```

If you plan to redo this repo multiple times, make a new branch
```
  $ git checkout -b attempt1
```

When you are ready to try again, repeat as necessary
```
  $ git checkout master
  $ git checkout -b attempt2
```

### Steps
At each step, before moving on, answer the following question: What justifies my expectation that I completed the requirement?  If you cannot justify this, then it means you haven't tested it yet.

#### STEP 1: 
Connect your react app to the browser

#### STEP 2: 
Render all the components + validate that they are all connected properly

#### STEP 3: 
Pass mock pokemon data down to App as props + render said data
  * this will require you to set props to state, do not do this in the constructor
  * set props to your state once your component mounts

#### STEP 4: 
Design Search.js such that a user can input data and on submit, run a function that console.log's what the user has submitted so far

#### STEP 5: 
Using axios + https://pokeapi.co/, complete the lib/getPokemon.js function
  * hint: google "npm axios" to find out the syntax for a GET request

#### STEP 6: 
Pass getPokemon function to App + configure the app so that when user submits, it will run getPokemon function instead of the console.log

#### STEP 7: 
As needed, update getPokemon.js so that pokemon data received from the API will render on the page in addition to any existing pokemon data
  * remove the mock data

### Advanced
Note: if you're not comfortable with STEPS 1-7, redo STEPS 1-7 instead

#### STEP 8: 
Create a new feature

#### STEP 9: 
Add css, you may use this as reference https://www.pokemon.com/us/pokedex/

#### STEP 10: 
On mount, render the original 151 pokemon, in the correct order

#### STEP 11:
PokemonListItem should only re-render if an applicable change has occurred.  They should NOT all re-render on every unrelated change

#### STEP 12: 
Refactor application to use Redux or Context API instead of passing props down manually

### Solutions
Once you are done with steps 1-7, solution code is available on branch solution1
```
  $ git checkout solution1
```

I've included some additional solution code and techniques on branch solution2.  Probably don't look at this until you have the basics down and have completed some/all of the advanced content
```
  $ git checkout solution2
```

### Acknowledgments
 * https://pokeapi.co/ for their amazing API
 * https://www.pokemon.com/us/