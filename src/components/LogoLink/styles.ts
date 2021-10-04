import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const Boximg = styled.img`
  background: url(${(props) => props.color}) center center no-repeat;
  background-size: cover;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
`;