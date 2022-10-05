import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/actions/filters-actions';
import { selectActiveFilter } from '../../store/selectors/filters-selectors';
import './Filter.css';

export default function Filter() {
   const dispatch = useDispatch();
   const activeFilter = useSelector(selectActiveFilter);

   return (
      <div>
         <button
            onClick={() => dispatch(setFilter('all'))}
            className={activeFilter === 'all' ? 'active btn' : 'btn'}
         >
            all
         </button>
         <button
            onClick={() => dispatch(setFilter('active'))}
            className={activeFilter === 'active' ? 'active btn' : 'btn'}
         >
            active
         </button>
         <button
            onClick={() => dispatch(setFilter('completed'))}
            className={activeFilter === 'completed' ? 'active btn' : 'btn'}
         >
            completed
         </button>
      </div>
   );
}
