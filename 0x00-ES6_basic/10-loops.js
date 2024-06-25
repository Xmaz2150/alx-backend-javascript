export default function appendToEachArrayValue(array, appendString) {
  const newList = [];
  for (const idx of array) {
    const value = appendString + idx;
    newList.push(value);
  }

  return newList;
}
