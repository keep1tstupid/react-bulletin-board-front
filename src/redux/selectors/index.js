import { createSelector } from 'reselect';


// todo: update selectors to use both state and type filtering when needed.

const getStateFilter = state => state.stateFilter;
const getItems = state => {
  // console.log('getItems', state)
  return state.items.itemData
};

export const getProperStateItems = createSelector(
  [getStateFilter, getItems],
  (stateFilter, items) => {
    switch (stateFilter) {
      case 'SHOW_ALL':
        return items
      case 'SHOW_IN_MODERATION':
        return items.filter(item => item.state === 'IN_MODERATION')
      case 'SHOW_APPROVED':
        return items.filter(item => item.state === 'APPROVED')
      case 'SHOW_DECLINED':
        return items.filter(item => item.state === 'DECLINED')
      default:
        //throw new Error('Unknown filter: ' + stateFilter)
        return items
    }
  }
);

// const getTypeFilter = state => {
//   console.log('state', state)
//   return state.items.typeFilter
// };

export const getProperTypeItems = createSelector(
  [getItems],
  (items) => (typeFilter) => {
    // console.log(typeFilter)
    switch (typeFilter) {
      case 'SHOW_ALL':
        return items
      case 'ADVERTISEMENT':
        return items.filter(item => item.type === 'ADVERTISEMENT' && item.state === 'APPROVED')
      case 'NOTE':
        return items.filter(item => item.type === 'NOTE')
      case 'COMPLAINT':
        return items.filter(item => item.type === 'COMPLAINT')
      case 'OTHER':
        return items.filter(item => item.type === 'OTHER')
      default:
        //throw new Error('Unknown filter: ' + typeFilter)
        return items
    }
  }
);
