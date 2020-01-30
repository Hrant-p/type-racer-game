export const constructUrl = (arr, queryObj) => {
  const queryString = Object.keys(queryObj)
    .map(x => `${x}=${queryObj[x]}`)
    .join('&');

  return arr.join('/') + (queryString ? `?${queryString}` : '');
};

export const calculateWPM = (interval, wordsCount) => {
  const minutesInterval = Math.round(interval / 60);
  return Math.round(wordsCount / minutesInterval);
};
