// return [
//   {
//     level: 'zhed-2',
//     isPass: false,
//   },
//   {
//     level: 'zhed-1',
//     isPass: false,
//   }
// ];
export function makePackMap() {
  let result = JSON.parse(window.localStorage.getItem('Zhed-App'));
  if (result) {
    return result;
  }
  result = [{ level: '1', enabled: true }];
  for (let i = 2; i <= 100; i++) {
    result.push({
      level: i.toString(),
      enabled: false,
    });
  }
  window.localStorage.setItem('Zhed-App', JSON.stringify(result));
  return result;
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
