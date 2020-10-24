import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  margin: 5px;
  height: 100%;
  background: #fff;
  h1 {
    color: #4f8f67;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 80px;
    height: 80px;
    padding: 5px;
  }
`;

export const Form = styled.form`
  input[type='file'] {
    cursor: pointer !important;
  }
  input[type='file']::-webkit-file-upload-button {
    visibility: hidden;
  }
  input[type='file'] {
    border: none;
    padding: 5px 12px;
    background: #4f8f67;
    color: #fff;
    font-size: 1em;
    transition: all 0.4s;
    cursor: pointer;
    border-radius: 20px;
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
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      pointer-events: all !important;
    }
  }
`;
