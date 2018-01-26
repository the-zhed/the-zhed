export function randomMap(arr) {
  return arr.map(row => {
    return row.map(col => Math.floor(Math.random() * (4)) + 1);
  });
}

export function nullMap(arr) {
  return arr.map(row => {
    return row.map(col => false);
  });
}
