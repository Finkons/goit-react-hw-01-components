import styled from "@emotion/styled";

export const TransactionBox = styled.div`
margin-top:50px;
`

export const TransactionTable = styled.table`
  width: 1000px;
  border-collapse: collapse;
  th {
  padding-block: 20px;
  text-align: center;
  font-size: 1.5rem;
  background-color: rgb(171, 245, 255);}
`


export const Thead = styled.thead`
  border: 1px solid rgb(171, 245, 255);
  th:not(:first-of-type) {
  border-left: 1px solid #fff;}
`

export const Tbody = styled.tbody`
  width: 100%;
  border-collapse: collapse;
  
  tr{ text-align: center;
    height: 50px;
    :nth-of-type(2n) {
  border: 1px solid #e7e7e7;
  border-top: none;
  background-color: rgb(219, 239, 240);
  }
}
`