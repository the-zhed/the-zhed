# Zhed

PackActions
- initializePack
  - `packList/INITIALIZE_PACK_LIST` : 게임팩리스트 초기화하기
    - localstorage 에서 데이터 추출하거나 새로운 객체 생성한다.
- selectPack
  - `currentPack/SELECT_CURRENT_PACK` : 게임팩 선택하기
    - 게임 묶음팩 선택하기, 게임 레벨 리스트 표시한다.

ZhedActions
- initializeZhed (게임초기화하기)
  - `currentLevel/SELECT_CURRENT_LEVEL` : 게임레밸 선택하기
    - /zhed/:level url에서 level 값을 획득한다.
  - `blockMapList/REQUEST_BLOCK` : 게임레벨 요청하기
    - ${level}.json 데이터를 서버에 요청하다.
  - `blockMapList/RECEIVE_BLOCK` : 게임레벨 받기
    - ${level}.json 데이터를 받아서 리스트에 등록한다. `{ [level]: [[]] }`
  - `blockMap/INITIALIZE_BLOCK_MAP`: 블록맵 초기화하기
    - 게임레벨 데이터를 복사해서 블록맵 배열을 생성한다.
  - `backgroundMap/INITIALIZE_BG_MAP` : 백그라운드컬러맵 초기화하기
    - 게임레벨 데이터를 참고해서 백그라운드맵 배열을 생성한다.
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
    - 게임레벨 데이터를 참고해서 방향점맵 배열을 생성한다.
  - `indicatorList/RESET_INDICATOR_LIST`: 방향점리스트 리셋하기
    - 빈 방향점리스트를 생성한다.
  - `blockMapHistory/RESET_BLOCK_MAP_HISTORY`: 블록맵히스토리 리셋하기
    - 빈 블록맵히스토리를 생성한다.
- selectZhedButton (숫자버튼 누르기)
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
    - 기존 방향점맵을 초기화한다.
  - `indicatorList/UNFOLD_INDICATOR_MAP`: 방향점리스트 등록하기
    - 버튼의 숫자만큼 길이의 4방향의 리스트를 생성한다.
  - `indicatorMap/UNFOLD_INDICATOR_MAP`: 방향점 표시하기
    - 방향점리스트를 참조해서 방향점을 표시한다.
- selectZhedDot (방향점버튼 누르기)
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
    - 기존 방향점맵을 초기화한다.
  - `blockMapHistory/NEXT_BLOCK_MAP_HISTORY`: 블록맵히스토리 저장하기
    - 현재 블록맵을 히스토리에 저장한다.
  - `blockMap/UNFOLD_BLOCK_MAP`: 블록맵에 블록리스트 그리기
    - 방향점리스트를 참조해서 블록을 표시한다.
  - `indicatorList/RESET_INDICATOR_LIST`: 방향점리스트 리셋하기
    - 방향점리스트를 지운다.
- ``: 게임 성공실패 체크
- `LEVEL_COMPLETE`: 게임 성공
  - `packList/NEXT_LEVEL_UNLOCK`: 다음게임레벨 허용하기
- `LEVEL_FAILURE`: 게임 실패
  - `LEVEL_RESTART`: 게임리스타트
- restartZhed (게임처음으로 되돌리기)
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
    - 기존 방향점맵을 초기화한다.
  - `indicatorList/RESET_INDICATOR_LIST`: 방향점리스트 리셋하기
    - 방향점리스트를 지운다.
  - `blockMap/RESTART_BLOCK_MAP`: 블록맵 리셋하기
    - 게임 데이터를 복사해서 블록맵 배열을 생성한다.
  - `blockMapHistory/RESET_BLOCK_MAP_HISTORY`: 블록맵히스토리 리셋하기
    - 블록맵히스토리를 리셋한다.
- undoZhed (블록방향버튼누르기 되돌리기)
  - `indicatorMap/RESET_INDICATOR_MAP`: 방향점맵 리셋하기
    - 기존 방향점맵을 초기화한다.
  - `indicatorList/RESET_INDICATOR_LIST`: 방향점리스트 리셋하기
    - 방향점리스트를 지운다.
  - `blockMap/UNDO_BLOCK_MAP`: 블록맵에 블록 그리기
    - 블록히스토리의 마지막 맵을 블록맵에 그린다.
  - `blockMapHistory/UNDO_BLOCK_MAP_HISTORY`: 블록맵히스토리 되돌리기
    - 블록히스토리의 마지막 맵을 삭제한다.

store
```javascript
{
  currentPack: 1,
  packList: [
    { level: "1", enabled: true,  pack: 1 },
    { level: "2", enabled: false, pack: 1 },
    { level: "3", enabled: false, pack: 1 },
  ],
  currentLevel: '',
  blockMapList: {
    '1': [
      [],
      [],
      [],
    ],
    '2': [
      [],
      [],
      [],
    ],
    '3': [
      [],
      [],
      [],
    ],
  },
  zhedStatus: 'initializeZhed',
  backgroundMap: [
    [   4 ,    1 ,    3 ,    2 ,    3 ,    4 ,    1 ,    2 ],
    [   1 ,    1 ,    3 ,    4 ,    1 ,    3 ,    2 ,    3 ],
    [   4 ,    1 ,    2 ,    4 ,    2 ,    4 ,    3 ,    2 ],
    [   1 ,    2 ,    2 ,    4 ,    4 ,    4 ,    2 ,    2 ],
    [   4 ,    4 ,    4 ,    4 ,    3 ,    2 ,    1 ,    1 ],
    [   4 ,    3 ,    2 ,    4 ,    3 ,    4 ,    4 ,    2 ],
    [   3 ,    4 ,    4 ,    2 ,    2 ,    2 ,    2 ,    2 ],
    [   3 ,    1 ,    1 ,    1 ,    3 ,    2 ,    4 ,    1 ],
  ],
  blockMap: [
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "2",   "0",   "0",   "Z",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "2",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "1",   "0",   "2",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
    [  "0",   "0",   "0",   "0",   "0",   "0",   "0",   "0"],
  ],
  indicatorMap: [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false,     2, false, false, false],
    [false, false, false, false,     1, false, false, false],
    [false,     2, false,     1,     0,     1,     2, false],
    [false, false, false, false,     1, false, false, false],
    [false, false, false, false,     2, false, false, false],
  ],
  indicatorList: {
    'up': [
      { row: 5, col: 4, index: 0 },
      { row: 4, col: 4, index: 1 },
      { row: 3, col: 4, index: 2 },
    ],
    'right': [
      { row: 5, col: 4, index: 0 },
      { row: 5, col: 5, index: 1 },
      { row: 5, col: 6, index: 2 },
    ],
    'down': [
      { row: 5, col: 4, index: 0 },
      { row: 6, col: 4, index: 1 },
      { row: 7, col: 4, index: 2 },
    ],
    'left': [
      { row: 5, col: 4, index: 0 },
      { row: 5, col: 3, index: 1 },
      { row: 5, col: 1, index: 2 },
    ],
  },
  blockMapHistory: [
    [], // init
    [], // first
    [], // last
  ]
}
```

게임 룰
- 숫자블록을 이용해서 타겟을 제거 해야한다.
- 타겟은 한 개 또는 한 개 이상이다. 복수일 경우 한 개만 제거해도 성공한다.
- 숫자 블록을 모두 사용했는데 타켓이 남아있으면 실패한다.
- 숫자 블록을 모두 사용하지 않고도 타켓을 제거할 수 있다.

로직
- 숫자 블록을 사용한다.
  - 타켓을 제거하지 못하면
    targetTerminated = false
  - 타켓을 제거하면
    targetTerminated = true
- 타켓을 제거했을 경우
  - 남아있는 숫자 블록 체크를 하지 않음
  - 게임 성공
- 타켓을 제거하지 못한 경우
  - 남아있는 숫자 블록 체크
    - 숫자 블록이 남은 경우 계속 게임 진행
    - 숫자 블록이 없는 경우 게임 실패

