var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, name) {
  const newChocolateBars = [name,...chocolateBars]
  return newChocolateBars
}