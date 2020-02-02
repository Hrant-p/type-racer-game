export const getWordsCount = str => (str ? str.match(/\w+/gm) : 0);

export const calculateWPM = (interval, wordsCount) => {
  const minutesInterval = Math.round(interval / 60);
  return Math.round(wordsCount / minutesInterval);
};
