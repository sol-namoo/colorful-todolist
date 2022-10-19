import { createStore } from 'redux'

const reducer = (store, action) => {
  if (store === undefined) {
    return {
      tab: 'Daily life',
      taskList:
        (() => JSON.parse(window.localStorage.getItem('Daily life')))() || [],
      checkList:
        (() => JSON.parse(window.localStorage.getItem('DailyChecked')))() || [],
    }
  }
  if (action.type === 'CHANGE_TAB') {
    return {
      tab: action.tab,
      taskList:
        (() => JSON.parse(window.localStorage.getItem(action.tab)))() || [],
      checkList:
        (() =>
          JSON.parse(window.localStorage.getItem(`${action.tab} Checked`)))() ||
        [],
    }
  }
  if (action.type === 'GET_TASKLIST') {
    return {
      ...store,
      taskList:
        (() => JSON.parse(window.localStorage.getItem(store.tab)))() || [],
    }
  }
  if (action.type === 'GET_CHECKLIST') {
    return {
      ...store,
      checkList:
        (() =>
          JSON.parse(window.localStorage.getItem(`${store.tab} Checked`)))() ||
        [],
    }
  }
}
const store = createStore(reducer)

export default store
