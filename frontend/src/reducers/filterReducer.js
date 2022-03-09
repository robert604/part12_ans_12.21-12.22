
const initialFilterText = ''

const filterReducer = (state=initialFilterText,action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filterText
  }
  return state
}

export const setFilter = filterText => {
  return {
    type: 'SET_FILTER',
    filterText: filterText
  }
}

export default filterReducer