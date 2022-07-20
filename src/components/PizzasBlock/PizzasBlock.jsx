import React from 'react';
import styles from './PizzasBlockStyles.module.scss';

function PizzasBlock({title, price, imageUrl, sizes, types}) {
  
  const selected = ['тонкое', 'традиционное']

  return(
    <div className={styles.root}>
      <div className={styles.item}>
        <img src={imageUrl} alt={title} />
        <h4>{title}</h4>
        <div className={styles.block}>
          <ul className={styles.listname}>
            {
              types.map((val, i) => (
                <li key={i}>{selected[val]}</li>
              ))
            }
          </ul>
          <ul className={styles.listname}>
            {
              sizes.map((val,i) => (
                <li key={i}>{val}</li>
              ))
            }
          </ul>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>

  )
}

export default PizzasBlock;