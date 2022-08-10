import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 0;
  align-content: center;
`;

export const Label = styled.label`
  margin: 0;
  color: #fff;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border-top: 0;
  border-right: 0;
  border-bottom: 2px solid #333;
  border-left: 0;
  border-radius: 10px;
  :focus {
    outline: none;
    border-bottom: none;
    transition: ease-in-out 0.25s;
    -webkit-box-shadow: 0px 10px 21px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 21px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 21px -7px rgba(0, 0, 0, 0.75);
  }
`;
