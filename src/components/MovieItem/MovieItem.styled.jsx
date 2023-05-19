import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    width: 600px;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
