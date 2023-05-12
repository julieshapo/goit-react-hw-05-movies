import styled from 'styled-components';

export const SearchBarStyle = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 600px;
  height: 40px;
  font-family: inherit;
  font-size: 20px;
  margin-right: 10px;
  outline: none;
  padding: 10px;
  border-radius: 3px;

  ::placeholder {
    font-family: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  padding: 8px;
  height: 40px;
  border: 0;
  border-radius: 3px;
  /* opacity: 0.6; */
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    opacity: 1;
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.lightGreen};
  }
`;
