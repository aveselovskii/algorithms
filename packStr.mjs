function packStr(str) {
  const map = str
    .split("")
    .reduce((acc, c) => acc.set(c, (acc.get(c) || 0) + 1), new Map());

  return Array.from(map.entries()).reduce(
    (acc, e) => acc + e[0] + (e[1] === 1 ? "" : e[1]),
    ""
  );
};

const tests = ["aaabbccccc", "abbc", "a"];

for (const str of tests) {
  console.log(packStr(str));
}
