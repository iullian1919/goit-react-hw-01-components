import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.containerTransaction}>
      <h1 className={styles.transactionTitle}>Internet Banking</h1>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TransactionItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
