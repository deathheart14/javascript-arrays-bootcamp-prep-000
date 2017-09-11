var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, name) {
  const newChocolateBars = [name,...chocolateBars]
  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(newArray, name) {
  newArray.unshift(name)
  return newArray
}

function addElementToEndOfArray(chocolateBars, name) {
  const newChocolateBars = [...chocolateBars,name]
  return newChocolateBars
}

function destructivelyAddElementToEndOfArray(newArray, name) {
  newArray.push(name)
  return newArray
}