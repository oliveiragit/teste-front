import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  background: #dadadada;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    align-self: flex-start;
    color: #4f8f67;
  }
  div {
    margin: auto;
    border: 0.5px solid green;
    padding: 10px;

    background-color: #fff;
    border-radius: 5px;
    max-width: 1080px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  li {
    margin: 8px;
  }

  img {
    width: auto;
    max-width: 300px;
    height: auto;
    max-height: 250px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  label {
    height: 50px;
    max-width: 250px;
    border: none;
    padding: 5px 12px;
    background: #4f8f67;
    border-radius: 20px;
    color: #fff;
    font-size: 1em;
    transition: all 0.4s;
    cursor: pointer;

    transition: color background 1s;
  }
  .inputfile:focus + label,
  label:hover {
    background: ${lighten(0.3, '#4f8f67')};
    color: black;
  }
  .inputfile + label {
    cursor: pointer; /* "hand" cursor */
  }

  input[type='submit'] {
    background: #dadada;
    margin: 0 5px 5px;
    border-radius: 40px;
    width: 150px;
    height: 30px;
    border-color: #4f8f67;
    color: #000;
    transition: background 0.2s;
    &:hover {
      background: ${lighten(0.3, '#cfcfcf')};
    }
  }
`;
