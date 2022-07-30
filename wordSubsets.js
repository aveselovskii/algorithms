function wordSubsets(words1, words2) {
  const subsetMap = new Map();

  for (const word2 of words2) {
    const word2Map = countCharactersToMap(word2);

    for (const [c, count] of word2Map) {
      subsetMap.set(c, Math.max(subsetMap.get(c) || 0, count));
    }
  }

  const result = [];

  for (const word1 of words1) {
    const word1Map = countCharactersToMap(word1);

    if (checkWordSubsetByMap(word1Map, subsetMap)) {
      result.push(word1);
    }
  }

  return result;
}

function countCharactersToMap(word) {
  const map = new Map();

  for (const c of word) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  return map;
}

function checkWordSubsetByMap(wordMap, subsetMap) {
  for (const [c, count] of subsetMap) {
    if ((wordMap.get(c) || 0) < count) {
      return false;
    }
  }

  return true;
}
