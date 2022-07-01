import {FriendContainer, Item, OnlineLabel, Avatar, Title} from './FriendList.styled'
import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {

  return <FriendContainer> {friends.map(friend => (
    <Item key={friend.id}>
      <OnlineLabel isOnline={friend.isOnline}></OnlineLabel>
      <Avatar src={friend.avatar} alt="User avatar" width="48" />
      <Title>{friend.name}</Title>
    </Item>))}
  </FriendContainer>

  
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};