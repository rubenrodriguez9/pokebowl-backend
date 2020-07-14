// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');



let getRow = function(str){
 for(let i = 0;i < pokemon.length;i++){
   if(str === pokemon[i][0]){
     return pokemon[i]
   }
   }
   return null
 }



// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
