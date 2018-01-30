// return {
//   1: { level: '1', enabled: true },
//   2: { level: '2', enabled: false },
// };
export function makePackMap() {
  const result = {};
  for (let i = 1; i <= 100; i++) {
    result[i] = {
      level: i.toString(),
      enabled: i === 1 ? true : false,
    };
  }
  return result;
}

const zhedApp = 'ZhedApp';

export function loadLocalStorage() {
  const data = JSON.parse(window.localStorage.getItem(zhedApp));
  return data;
}

export function saveLocalStorage(data) {
  window.localStorage.setItem(zhedApp, JSON.stringify(data));
  return;
}

// return 1 or 2 or 3 or 4
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
