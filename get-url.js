// Your code here.
// Note that you do NOT need the data for this function!

let pokemon = require('./pokemon.js')

const getUrl = function(arr){
  for(let i = 0;i < pokemon.length;i++){
    if(pokemon[i] === arr){
      console.log(pokemon[i][1])
    }
  }
}

// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
