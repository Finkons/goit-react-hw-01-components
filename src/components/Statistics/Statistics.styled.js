import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
display: flex;
margin-top: 50px ;
justify-content: center;
  flex-direction: column;
  width: 280px;
  border: 1px solid #e4e9ed;
   cursor: pointer;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    border-radius: 5px;
  }
`
export const Title = styled.h2`
  width: 100%;
  text-align: center;
`

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px;
  list-style: none;
  padding: 0;
  margin: 0;
`
export const StatItem = styled.li`
 display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  background-color: ${p => (p.backgroundColor)};
 
`
export const LineText = styled.span`
  color: #212121;
  opacity: 1;
  &.subtitle {
    opacity: 1;
    margin-top: 10px;
  }
`;