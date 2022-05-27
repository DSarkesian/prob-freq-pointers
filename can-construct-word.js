"use strict"

// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word,letters) {
  let wordList = word.split("");
  let lettersList = letters.split("")

  let fc1 = frequencyCounter(wordList)
  let fc2 = frequencyCounter(lettersList)

  for(let key in fc1){
    if(key in fc2===false){
      return false
    }else{
      if(fc1[key] > fc2[key]){
        return false
      }
    }
  }
  return true
}

function frequencyCounter(items){
  let fc = {}
  for(let value of items) {
    let vb = fc[value] || 0;
    fc[value] = vb + 1;
  }
  return fc;
}
