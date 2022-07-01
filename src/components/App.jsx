import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import friends from '../Data/friends.json'
import userData from '../Data/user.json';
import data from '../Data/data.json';
import transactions from '../Data/transactions.json';
import { Container } from 'components/Profile/Profile.styled';



export const App = () => {
  return (
    <Container>
      <Profile user={userData}/>
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  )
}
