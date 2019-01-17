## Project Donner - Document
 
>ドン,カツ,ド,ド,カツ,ド,ドドカ,ド,カ,ド,ドドカ,カツ
 
## Main Features
 
1. Score Search
2. Score View
3. Score Download
 
## Technology Stacks
 
- React Native
- Expo
- React Native Element UI
 
## Actions
 
(TODO)
 
## IO
 
### Settings
 
- Stores settings of this application into single json file
- Path: `${FileSystem.documentDirectory}setting.json`
 
Format:
 
```json
{
    autoSave: true,
}
```
 
### Saved Scores
 
- Stores settings of this application into single json file
- Path: `${FileSystem.documentDirectory}setting.json`
 
Format:
 
```json
{
  [
    title: '愛唄',
    subTitle: '',
    BPM: '85',
    levels: [2, null, 2, 3],
    levelID: 0,
  ]
}
```
 
## Dynamic Data
 
### States
 
(TODO)
 
```
 
```
 
## Static Data
 
### Version Data
 
- Stores application version data
- Path: `data/Version.js`
 
Format:
 
```js
const data_Version = {
  updateDate: '2019-01-06',
  version: 'V0.6',
  updateHistory: [
    {
      version: 'V0.1',
      detail: 'Init: Framework',
    },
    {
      version: 'V0.2',
      detail: 'Updated: Async call for score details',
    },
  ]
}
```
 
### Levels Data
 
- Stores game levels data
- Path: `data/Levels.js`
 
Format:
 
```js
const levels = [
  {
    levelID: 0,
    title: 'かんたん',
    transTitle: '梅',
  },
  {
    levelID: 1,
    title: 'ふつう',
    transTitle: '竹',
  },
  {
    levelID: 2,
    title: 'むずかしい',
    transTitle: '松',
  },
  {
    levelID: 3,
    title: 'おに',
    transTitle: '鬼',
  },
],
```
 
### Scores Data
 
- Stores game scores data
- Path: `data/Scores.js`
 
> Big data file, use `data/Scores.Dev.js` for dev
 
Format:
 
```js
const scores = [
  {
    categoryID: 0,
    scores: [] // array of scores
  },
  {
    categoryID: 0,
    scores: []
  }
]
```
 
#### Score Object
 
- Description of a single score
 
Format:
 
```js
{
  id: 0,
  title: '愛唄',
  subTitle: '',
  BPM: '85',
  levels: [2, null, 2, 3], // if not available for any difficulty level, put null here
},
```
 