import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 70rem;
  margin: 5rem auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;

  .text {
    flex: 1;

    h1 {
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-dark']};
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      margin-top: 0.25rem;
    }
  }

  img {
    width: 30rem;
    height: auto;
  }
`

export const InfoContainer = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.purple};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  .info-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.white};
      padding: 0.5rem;
      border-radius: 999px;
    }
  }

  .purple svg {
    background: ${(props) => props.theme.purple};
  }

  .yellow svg {
    background: ${(props) => props.theme.yellow};
  }

  .yellow-dark svg {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
