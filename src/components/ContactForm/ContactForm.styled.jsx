import styled from '@emotion/styled';

export const Form = styled.form`
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px auto;
  overflow: hidden;
  padding: 30px;
  text-align: center;
  width: 350px;
  background-color: aliceblue;
`;

export const Label = styled.label`
  color: #383866;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border-top: 0;
  border-right: 0;
  border-bottom: 2px solid #333;
  border-left: 0;
  :focus {
    outline: none;
    border-bottom: none;
    transition: ease-in-out 0.25s;
    -webkit-box-shadow: 0px 10px 21px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 21px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 21px -7px rgba(0, 0, 0, 0.75);
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: teal;
  border-color: #46b8da;
  transition: ease-in-out 0.5s;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;
