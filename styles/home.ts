import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2.5rem;
  text-align: center;
  color: var(--letters);
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const SearchDiv = styled.div`
  background: var(--box);
  width: 40vw;
  height: 50vh;
  margin: 0 auto;
  padding: 2rem;

  box-shadow: rgb(0 0 0 / 16%) 0px 1px 2px, rgb(0 0 0 / 10%) 0px 1px 2px;
`;

export const LinkButton = styled.a`
  background: #2c932c;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  position: relative;
  margin-top: 1rem;

  &:hover { 
    background: #32ac32;
  }
`;