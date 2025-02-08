import React, { useState } from "react";
import { styles } from "../service/style";

const ItemCount = ({ stock = 10, initial = 1, onAdd, productName }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{productName}</h2>

      <div style={styles.counterContainer}>
        <button
          style={{
            ...styles.button,
            ...(count === 1 ? styles.disabledButton : {}),
          }}
          onClick={handleDecrement}
          disabled={count === 1}
        >
          -
        </button>
        <span style={styles.counter}>{count}</span>
        <button
          style={{
            ...styles.button,
            ...(count === stock ? styles.disabledButton : {}),
          }}
          onClick={handleIncrement}
          disabled={count === stock}
        >
          +
        </button>
      </div>

      <button
        style={styles.addButton}
        onClick={() => onAdd(count, productName)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
