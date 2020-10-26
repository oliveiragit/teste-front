import styled from 'styled-components';

export const Container = styled.header`
  .navbar {
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 12px;
      background-color: #000;
    }
  }
  .navbar a {
    color: #fff;
  }
  .navbar li > .active {
    font-weight: bold;
    color: #4f8f67;
  }
`;
