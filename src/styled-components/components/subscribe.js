import styled from 'styled-components';
import { darkblue, white, green, lightblue } from '../colors';

export const SubscribeWrap = styled.div`
  width: 100%;
  background-color: ${green};
  padding-bottom: 24px;
  position: relative;
`;

export const Subscribe = styled.div`
  width: 100%;
  background-color: ${green};
  max-width: 800px;
  margin: auto;
  padding-top: 24px;
  position: relative;
  text-align: center;
  h2 {
    color: ${white}
  }
  textarea, input, select {
    font-family: diazo-mvb-ex-cond, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    padding: 8px;

  }
  select {
    width: 100%;
  }
  textarea {
    height: 200px;
    width: 80%;
  }
  input {
    height: 50px;
    width: 80%;
  }
  table {
    margin: auto;
    width: 80%;
    th, td {
      background-color: ${white};
      border: 1px solid ${darkblue};
      padding: 4px 8px;
      text-align: center;
    }
    tr {
      td:nth-of-type(1){
        width: 40%;
        select {
          width: 100%;
          height: 50px;
        }
      }
      td:nth-of-type(2){
        width: 20%;
      }
      td:nth-of-type(3){
        width: 40%;
        select {
          width: 100%;
          height: 50px;
        }
      }
    }
  }
  button {
    padding: 4px;
  }
  .removeButton {
    padding: 4px 8px;
    border: 1px solid red;
    width: max-content;
    border-radius: 3px;
    margin: 12px auto 0 auto;
    color: #fff;
  }
  .addButton {
    padding: 4px 8px;
    border: 1px solid #fff;
    width: max-content;
    border-radius: 3px;
    margin: 12px auto 0 auto;
    color: #fff;
  }
  .dateinput::before, .timeinput::before {
    width: 100%;
    content: attr(placeholder);
  }
  .dateinput:hover::before, .dateinput:valid::before, .timeinput:hover::before, .timeinput:valid::before {
    width: 0%;
    content: "";
  }


  .hoverer:hover {
    cursor: pointer;
    color: ${lightblue};
    border-color: ${lightblue};
  }
  .productBox {
    width: 80%;
    border: 1px solid #fff;
    padding: 8px;
    margin: 4px auto;
    input {
      width: 100%;
    }
  }
`;
export const TextBox = styled.button`
  width: 80%;
  height: 0;
  padding: 0;
  border: 0;
  margin: auto;
  background-color: ${darkblue};
  position: relative;
  #airplane:hover {
    fill: ${darkblue};
    cursor: pointer;
    transition: fill 0.5s;
  }
`;
