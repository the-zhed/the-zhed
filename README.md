# Zhed

store
```javascript
{
  currentPack: 1,
  packList: {
    '1': { level: 1, enabled: true,  pack: 1 },
    '2': { level: 2, enabled: false, pack: 1 },
    '3': { level: 3, enabled: false, pack: 1 },
  },
  currentLevel: '',
  blockMapList: {
    '1': [
      [],[],[],[],[]
    ],
    '2': [
      [],[],[],[],[]
    ],
    '3': [
      [],[],[],[],[]
    ],
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
```javascript
{
  backgroundMap: [
    [   4 ,    1 ,    3 ,    2 ,    3 ,    4 ,    1 ,    2 ],
    [   1 ,    1 ,    3 ,    4 ,    1 ,    3 ,    2 ,    3 ],
    [   4 ,    1 ,    2 ,    4 ,    2 ,    4 ,    3 ,    2 ],
    [   1 ,    2 ,    2 ,    4 ,    4 ,    4 ,    2 ,    2 ],
    [   4 ,    4 ,    4 ,    4 ,    3 ,    2 ,    1 ,    1 ],
    [   4 ,    3 ,    2 ,    4 ,    3 ,    4 ,    4 ,    2 ],
    [   3 ,    4 ,    4 ,    2 ,    2 ,    2 ,    2 ,    2 ],
    [   3 ,    1 ,    1 ,    1 ,    3 ,    2 ,    4 ,    1 ]
  ],
  blockMap: [
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "2",   "0",   "0",   "Z",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "2",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "1",   "0",   "2",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"]
  ],
  indicatorMap: [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false,     2, false, false, false],
    [false, false, false, false,     1, false, false, false],
    [false,     2, false,     1,     0,     1,     2, false],
    [false, false, false, false,     1, false, false, false],
    [false, false, false, false,     2, false, false, false]
  ],
  indicatorList: {
    'up': [
      { row: 5, col: 4 },
      { row: 4, col: 4 },
      { row: 3, col: 4 }
    ],
    'right': [
      { row: 5, col: 4 },
      { row: 5, col: 5 },
      { row: 5, col: 6 }
    ],
    'down': [
      { row: 5, col: 4 },
      { row: 6, col: 4 },
      { row: 7, col: 4 }
    ],
    'left': [
      { row: 5, col: 4 },
      { row: 5, col: 3 },
      { row: 5, col: 1 }
    ],
  },
  blockMapHistory: [
    [], // init
    [], // first
    [], // last
  ]
}
```
