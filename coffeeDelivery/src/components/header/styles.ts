import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2rem 0;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  font-size: 0.875rem;
`;

export const CartContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;

  a {
    color: inherit;
    display: flex;
    position: relative;
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
;
