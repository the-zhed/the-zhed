# Zhed

Pack Actions
- `packList/INITIALIZE_PACK_LIST` : 게임팩리스트 초기화하기
- `currentPack/SELECT_CURRENT_PACK` : 게임팩 선택하기

Zhed Actions
- initializeZhed (게임초기화하기)
  - `currentLevel/SELECT_CURRENT_LEVEL` : 게임레밸 선택하기
  - `blockMapList/REQUEST_BLOCK` : 게임레벨 요청하기
  - `blockMapList/RECEIVE_BLOCK` : 게임레벨 받기
  - `backgroundMap/INITIALIZE_BG_MAP` : 백그라운드컬러맵 초기화하기
  - `blockMap/INITIALIZE_BLOCK_MAP`: 블록맵 초기화하기
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
  - `indicatorList/RESET_INDICATOR_LIST`: 방향점리스트 리셋하기
  - `blockMapHistory/RESET_BLOCK_MAP_HISTORY`: 블록맵히스토리 리셋하기
- selectZhedButton (숫자버튼 누르기)
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
  - `indicatorList/UNFOLD_INDICATOR_MAP`: 방향점리스트 등록하기
  - `indicatorMap/UNFOLD_INDICATOR_MAP`: 방향점 표시하기
- selectZhedDot (블록방향버튼 누르기)
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
  - `blockMap/UNFOLD_BLOCK_MAP`: 블록맵에 블록리스트 그리기
  - `indicatorList/RESET_INDICATOR_LIST`: 방향점리스트 리셋하기
- restartZhed (게임처음으로 되돌리기)
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
  - `indicatorList/RESET_INDICATOR_LIST`: 방향점리스트 리셋하기
  - `blockMapHistory/RESET_BLOCK_MAP_HISTORY`: 블록맵히스토리 리셋하기
- undoZhed (블록방향버튼누르기 되돌리기)
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
  - `indicatorList/RESET_INDICATOR_LIST`: 방향점리스트 리셋하기
  - `blockMapHistory/UNDO_BLOCK_MAP_HISTORY`: 블록맵히스토리 되돌리기

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
