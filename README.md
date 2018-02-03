# Zhed

store
```js
{
  packZhed: {
    1: { level: '1', enabled: true },
    2: { level: '2', enabled: false },
    3: { level: '3', enabled: false },
  },
  mapZhed: {
    '1': {
      level: '1',
      map: [
        [],[],[],[],[]
      ]
    }
  },
  stagingZhed: {
    level: 'not found',
    backgroundMap: [],
    zhedBlockMap: [],
    indicatorMap: [],
  }
}
```

`stagingZhed`
```js
{
  backgroundMap: [
    [    4,    1 ,    3 ,    2 ,    3 ,    4 ,    1 ,    2 ],
    [    1,    1 ,    3 ,    4 ,    1 ,    3 ,    2 ,    3 ],
    [    4,    1 ,    2 ,    4 ,    2 ,    4 ,    3 ,    2 ],
    [    1,    2 ,    2 ,    4 ,    4 ,    4 ,    2 ,    2 ],
    [    4,    4 ,    4 ,    4 ,    3 ,    2 ,    1 ,    1 ],
    [    4,    3 ,    2 ,    4 ,    3 ,    4 ,    4 ,    2 ],
    [    3,    4 ,    4 ,    2 ,    2 ,    2 ,    2 ,    2 ],
    [    3,    1 ,    1 ,    1 ,    3 ,    2 ,    4 ,    1 ]
  ],
  zhedBlockMap: [
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "2",   "0",   "0",   "Z",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "2",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "1",   "0",   "2",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"]
  ],
  indicator: [
    [false, false, false, false, false, false, false, false]
    [false, false, false, false, false, false, false, false]
    [false, false, false, false, false, false, false, false]
    [false, false, false, false,     2, false, false, false]
    [false, false, false, false,     1, false, false, false]
    [false,     2, false,     1,     0,     1,     2, false]
    [false, false, false, false,     1, false, false, false]
    [false, false, false, false,     2, false, false, false]
  ],
  blocks: {
    up: [
      { row: 5, col: 4 },
      { row: 4, col: 4 },
      { row: 3, col: 4 }
    ],
    right: [
      { row: 5, col: 4 },
      { row: 5, col: 5 },
      { row: 5, col: 6 }
    ],
    down: [
      { row: 5, col: 4 },
      { row: 6, col: 4 },
      { row: 7, col: 4 }
    ],
    left: [
      { row: 5, col: 4 },
      { row: 5, col: 3 },
      { row: 5, col: 1 }
    ],
  },
  history: [

  ]
}
```
