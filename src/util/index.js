// return {
//   1: { level: '1', enabled: true },
//   2: { level: '2', enabled: false },
// };
export function makePackZhed() {
  const result = {};
  for (let i = 1; i <= 100; i++) {
    result[i] = {
      level: i.toString(),
      enabled: i === 1 ? true : false,
      package: parseInt((i / 20), 10) + 1,
    };
  }
  return result;
}

export function getLocalstorage() {
  const appName = 'ZhedApp';
  let pack = JSON.parse(window.localStorage.getItem(appName));
  if (!pack) {
    pack = makePackZhed();
    window.localStorage.setItem(appName, JSON.stringify(pack));
  }
  return pack;
}


// return [
//   [1, 2, 3, 4],
//   [4, 4, 3, 3],
// ];
export function randomMap(arr) {
  return arr.map(row => {
    return row.map(col => Math.floor(Math.random() * (4)) + 1);
  });
}

// return [
//   [false, false, false],
//   [false, false, false],
// ];
export function nullMap(arr) {
  return arr.map(row => {
    return row.map(col => false);
  });
}
