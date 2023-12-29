import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }, idx) => (
        <tr className={idx % 2 === 0 && css.tr} key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default TransactionHistory;
