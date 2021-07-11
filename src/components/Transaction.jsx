import React from 'react';
import Item from './Item';
import './Transaction.css';
import { v4 as uuidv4 } from 'uuid';

const Transaction = ({ data }) => {
  return (
    <div>
      <ul className="item-list">
        {data.map((element) => {
          return <Item key={uuidv4()} {...element} />;
        })}
      </ul>
    </div>
  );
};

export default Transaction;
