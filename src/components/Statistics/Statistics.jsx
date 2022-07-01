import PropTypes from 'prop-types';
import {StatisticsCard, Title, StatList, StatItem, LineText} from './Statistics.styled'


export const Statistics = ({title="Upload stats" , stats}) => {
  const bgrandom = () => 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';
  
  return <StatisticsCard>
  <Title>{title}</Title>

  <StatList>
    {stats.map(stats => (
    <StatItem key={stats.id} back={bgrandom()}>
      <LineText>{stats.label}</LineText>
      <LineText>{stats.percentage}</LineText>
    </StatItem>))}
  </StatList>
  </StatisticsCard>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}