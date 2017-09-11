var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, name) {
  const newChocolateBars = [name,...chocolateBars]
  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(newArray, name) {
  newArray.push(name)
  return newArray
}
