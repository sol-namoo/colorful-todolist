import { createStore } from 'redux'

const reducer = (store, action) => {
  if (store === undefined) {
    return {
      tab: 'Daily life',
      taskList:
        (() => JSON.parse(window.localStorage.getItem('Daily life')))() || [],
      checkList:
        (() =>
          JSON.parse(window.localStorage.getItem('Daily life Checked')))() ||
        [],
      isOpen: false,
    }
  }
  if (action.type === 'CHANGE_TAB') {
    return { ...store, tab: action.tab }
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
  if (action.type === 'CHANGE_OPEN') {
    return { ...store, isOpen: action.isOpen }
  }
}
const store = createStore(reducer)

export default store
