import React from 'react';
import styles from './SortStyles.module.scss';

function Sort({value, onClickSort}) {

    const sortObj = [
      {name: 'популярность', sortProperty: 'rating'},
      {name: 'цене', sortProperty: 'price'},
      {name: 'алфавиту', sortProperty: 'title'},
    ]

    return(
      <ul className={styles.root}>
        {
          sortObj.map((val, i) => (
            <li onClick={() => onClickSort(val)} className={value.sortProperty == val.sortProperty ? 'active' : ''}  key={i}>{val.name}</li>
          ))
        }
      </ul>
    );
}

export default Sort;