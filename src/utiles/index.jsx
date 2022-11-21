export const arrayToPairArray = array => {
  const pair = []
  for (let i = 0; i < array.length; i += 2) {
    const itemA = array[i]
    const itemB = array[i + 1]

    pair.push([itemA, itemB])
  }
  return pair
}

export const isIncluded = (arr, item) => {
  return arr.includes(item)
}

export const findIndex = (arr, item) => {
  console.log({ arr, item })
  return arr.indexOf(item)
}
