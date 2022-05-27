// add whatever parameters you deem necessary & write docstring
function averagePair(word,letters) {
  let arr1 = word.split("");
  let arr2 = letters.split("")

  let fc1 = frequencyCounter(arr1)
  let fc2 = frequencyCounter(arr2)

  for(let key in fc1){
    if(key in fc2===false){
      return false
    }else{
      if(fc1[key]!==fc2[key]){
        return false
      }
    }
  }
  return true




}






function frequencyCounter(items){
  let fc = {}
  for(let value of items){
    let vb = fc[value] || 0;
    fc[value] = vb + 1
  }
  return fc
}
