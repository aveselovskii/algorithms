function wordSubsets(words1, words2) {
  const subset = Array(26).fill(0);
  
  for (let i = 0; i < words2.length; i++) {
      const tmp = count(words2[i]);
      
      for (let j = 0; j < tmp.length; j++) {
          subset[j] = Math.max(subset[j], tmp[j])
      }
  }
  
  const result = [];
  
  for (let i = 0; i < words1.length; i++) {
      const tmp = count(words1[i]);

      if (isSubset(tmp, subset)) {
          result.push(words1[i]);
      }
  }
  
  return result;
};

function count(word) {
  const arr = Array(26).fill(0);
  
  for (let i = 0; i < word.length; i++) {
      arr[word.charCodeAt(i) - 97] += 1;
  }

  return arr;
};

function isSubset(word, subset) {
  for (let i = 0; i < word.length; i++) {
      if (word[i] < subset[i]) {
          return false;
      }
  }

  return true;
};