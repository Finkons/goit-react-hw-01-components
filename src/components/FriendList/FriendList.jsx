import {
  FriendContainer,
  Item,
  OnlineLabel,
  Avatar,
  Title,
} from './FriendList.styled';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <FriendContainer>
      {friends.map(({id, isOnline, avatar, name}) => 
        <Item key={id}>
          <OnlineLabel isOnline={isOnline}></OnlineLabel>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Title>{name}</Title>
        </Item>
      )}
    </FriendContainer>
  );
};

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
export default FriendList