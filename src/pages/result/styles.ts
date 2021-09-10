import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 5rem 2.5rem;
  text-align: center;
  color: var(--letters);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: red;
  width: 10rem;
  height: 3rem;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;