import React from 'react';
import styles from './CategoryStyle.module.scss';

function Category({value, onClickCategory}) {

  const categorys = [
    'Все', 'Мясные', 'Вегетарианская', 'Гриль','Острые', 'Закрытые'
  ]
  return (
    <ul className={styles.root}>
      {
        categorys.map((val, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value == i ? 'active' : ''}>{val}</li>
        ))
      }
    </ul>
  );
}

export default Category