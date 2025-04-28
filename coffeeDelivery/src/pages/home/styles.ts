import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 5.75rem 0;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    max-width: 476px;
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      width: 2rem;
      height: 2rem;
      color: ${(props) => props.theme.white};

      &.yellow-dark {
        background: ${(props) => props.theme['yellow-dark']};
      }
      &.gray {
        background: ${(props) => props.theme['base-text']};
      }
      &.yellow {
        background: ${(props) => props.theme.yellow};
      }
      &.purple {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`

export const CoffeeList = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 2rem;
`

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  text-align: center;

  img {
    margin-top: -2.5rem;
    width: 120px;
    height: 120px;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;

    span {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 0.625rem;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      border-radius: 9999px;
    }
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    margin-top: 0.5rem;
  }

  footer {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};

    strong {
      font-weight: 800;
      margin-right: 0.25rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .quantity {
      display: flex;
      align-items: center;
      background: ${(props) => props.theme['base-button']};
      border-radius: 6px;
      padding: 0.5rem;
      gap: 0.25rem;

      button {
        border: none;
        background: transparent;
        color: ${(props) => props.theme.purple};
        font-size: 1.25rem;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme['purple-dark']};
        }
      }

      span {
        width: 1.25rem;
        text-align: center;
        color: ${(props) => props.theme['base-title']};
      }
    }

    .cart {
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
      display: flex;

      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
}

`
