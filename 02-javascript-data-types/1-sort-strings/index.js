/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const arrCopy = [...arr];
  arrCopy.sort((a, b) => {
    return a.localeCompare(b, 'ru', {
      caseFirst: 'upper'
    });
  });
  if (param === 'desc') {
    return arrCopy.reverse();
  }
  return arrCopy;
}
