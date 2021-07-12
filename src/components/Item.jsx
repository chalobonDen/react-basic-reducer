import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ title, amount, formatNumber }) => {
  const status = amount < 0 ? 'expense' : 'income';
  const symbol = amount < 0 ? '-' : '+';
  return (
    <li className={status}>
      {title}
      <span>
        {symbol}
        {formatNumber(Math.abs(amount))}
      </span>{' '}
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  formatNumber: PropTypes.func,
};

export default Item;
