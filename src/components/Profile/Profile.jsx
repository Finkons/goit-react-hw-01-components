import { ProfileCard, Description, Stats, Container, Qauntity, Name } from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return <Container>
    <ProfileCard>
      <Description>
        <img
          src={avatar}
          alt={username}
        />
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
  </Container>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};