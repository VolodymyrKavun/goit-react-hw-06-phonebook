import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  padding: 10px 15px;
  width: 50%;
  color: tomato;
`;

export const Button = styled.button`
  /* display: block;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #92de34;
  border-radius: 30px;
  font-weight: 600;
  color: #025600;
  background-size: 100% 100%;
  box-shadow: 0 0 0 7px #92de34 inset; */
  /* todo */
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
  background-color: tomato;
  border-color: #46b8da;
  transition: ease-in-out 0.5s;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;
