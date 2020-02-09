export const getWordsCount = str => (str ? str.match(/\w+/gm).length : 0);

export const calculateWPM = (interval, wordsCount) => Math.round((60 / interval) * getWordsCount(wordsCount));

export const completionPercentCalc = (allWords, alreadyTypedWords) => {
  if (!alreadyTypedWords) {
    return 0;
  }
  const percent = (getWordsCount(alreadyTypedWords) / getWordsCount(allWords)) * 100;
  return Math.round(percent);
};
