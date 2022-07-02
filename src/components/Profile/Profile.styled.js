import styled from '@emotion/styled';


export const ProfileCard = styled.div`
  width: max-content;
  height: max-content;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  cursor: pointer;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #f2f6f9;
  }
  img {margin-bottom: 20px;
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50%;}
}
`;

export const Description = styled.div`
  display: grid;
  place-items: center;
  padding-block: 40px;
}
`;

export const Stats = styled.ul`
 margin-block: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  place-items: center;
  background-color: lightgrey;
  li {
  display: grid;
  place-items: center;
  width: 90px;
  padding-top:10px;
  padding-bottom:10px;
  grid-gap: 5px;
  min-width: 100%;
  border-top: 0.5px solid #c2c2c2;
  border-left: 0.5px solid #c2c2c2;
}
}
`;
export const Qauntity = styled.span`
  display: block;
  font-weight: bold;
}
`;

export const Name = styled.div`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
}
`;

