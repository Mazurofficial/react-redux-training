import { SET_FILTER } from '../constants/filters-constants';

export const setFilter = (filter) => ({
   type: SET_FILTER,
   filter,
});
