import {TransactionBox,TransactionTable, Thead,Tbody } from './TransactionHistory.styled'
import PropTypes from 'prop-types';



export const TransactionHistory = ({items}) => {
  return <TransactionBox>
    <TransactionTable>
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>

  <Tbody>
    {items.map(item => (
              <tr key={item.id}>
                <td>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
  </Tbody>
</TransactionTable>
  </TransactionBox>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};