import { createSelector } from 'reselect';

const getItems = state => {
  // console.log('getItems', state)
  return state.items.itemData
};

// export const getItemsForModerationList = createSelector(
//   [getStateFilter, getItems],
//   (stateFilter, items) => {
//     switch (stateFilter) {
//       case 'SHOW_ALL':
//         return items
//       case 'SHOW_IN_MODERATION':
//         return items.filter(item => item.state === 'IN_MODERATION')
//       case 'SHOW_APPROVED':
//         return items.filter(item => item.state === 'APPROVED')
//       case 'SHOW_DECLINED':
//         return items.filter(item => item.state === 'DECLINED')
//       default:
//         //throw new Error('Unknown filter: ' + stateFilter)
//         return items
//     }
//   }
// );


export const getItemsForUsersList = createSelector(
  [getItems],
  (items) => (typeFilter) => {
    // console.log(typeFilter)
    switch (typeFilter) {
      case 'SHOW_ALL':
        return items.filter(item => item.state === 'APPROVED')
      case 'ADVERTISEMENT':
        return items.filter(item => item.type === 'ADVERTISEMENT' && item.state === 'APPROVED')
      case 'NOTE':
        return items.filter(item => item.type === 'NOTE' && item.state === 'APPROVED')
      case 'COMPLAINT':
        return items.filter(item => item.type === 'COMPLAINT' && item.state === 'APPROVED')
      case 'OTHER':
        return items.filter(item => item.type === 'OTHER' && item.state === 'APPROVED')
      default:
        //throw new Error('Unknown filter: ' + typeFilter)
        return items
    }
  }
);
