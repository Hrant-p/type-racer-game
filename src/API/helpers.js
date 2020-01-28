export const constructUrl = (arr, queryObj) => {
  const queryString = Object.keys(queryObj)
    .map(x => `${x}=${queryObj[x]}`)
    .join('&');

  return arr.join('/') + (queryString ? `?${queryString}` : '');
};

export const calculateWPM = (startDate, finishDate, wordsCount) => {
  const interval = Math.round((finishDate - startDate) / 6000);
  return Math.round(interval / wordsCount);
}
