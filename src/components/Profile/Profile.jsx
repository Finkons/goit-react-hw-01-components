import {
  ProfileCard,
  Description,
  Stats,
  Qauntity,
  Name,
} from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const { username, avatar, tag, location, stats } = user;
  return (
    <ProfileCard>
      <Description>
        <img src={avatar} alt={username} />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <li>
          <span>Followers</span>
          <Qauntity>{stats.followers}</Qauntity>
        </li>
        <li>
          <span>Views</span>
          <Qauntity>{stats.views}</Qauntity>
        </li>
        <li>
          <span>Likes</span>
          <Qauntity>{stats.likes}</Qauntity>
        </li>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;