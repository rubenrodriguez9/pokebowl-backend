// Your code here.
// Note that you do NOT need the data for this function!

let pokemon = require('./pokemon.js')

const getUrl = function(arr){
  if(arr === null){
    return null

  }else return arr[1]
}

// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
