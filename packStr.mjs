function packStr(str) {
  const map = new Map();
  
  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let result = "";

  for (const [char, count] of map) {
    result += `${count === 1 ? '' : count}${char}`;
  }

  return result;
};

const tests = ["aaabbccccc", "abbc", "a"];

for (const str of tests) {
  console.log(packStr(str));
}
