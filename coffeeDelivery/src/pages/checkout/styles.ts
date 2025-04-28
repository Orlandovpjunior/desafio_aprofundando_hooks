import styled from "styled-components";

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const AddressForm = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-header {
    display: flex;
    gap: 0.5rem;

    .icon-map {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    h3 {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    width: 100%;
  }

  .row {
    display: flex;
    gap: 0.75rem;
  }
`

export const PaymentOptions = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-header {
    display: flex;
    gap: 0.5rem;

    .icon-dollar {
      color: ${(props) => props.theme.purple};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    h3 {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  .options {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;

  button {
    flex: 1;
    background: ${(props) => props.theme['base-button']};
    border: 1px solid transparent;
    padding: 1rem;
    font-size: 0.75rem;
    border-radius: 6px;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-text']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &.active {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    }
  }
}

`

export const SelectedCoffees = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const CoffeeCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding: 1.5rem 0;

  img {
    width: 64px;
    height: 64px;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    .actions {
      display: flex;
      gap: 0.5rem;

      .quantity {
        display: flex;
        align-items: center;
        background: ${(props) => props.theme['base-button']};
        padding: 0.5rem;
        border-radius: 6px;
        gap: 0.25rem;

        button {
          border: none;
          background: transparent;
          color: ${(props) => props.theme.purple};
          font-size: 1rem;
          cursor: pointer;
        }

        span {
          width: 1.25rem;
          text-align: center;
          color: ${(props) => props.theme['base-title']};
        }
      }

      .remove {
        background: ${(props) => props.theme['base-button']};
        border: none;
        padding: 0.5rem;
        border-radius: 6px;
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${(props) => props.theme['base-text']};
        display: flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;

        &:hover {
          background: ${(props) => props.theme['base-hover']};
        }
      }
    }
  }

  strong {
    color: ${(props) => props.theme['base-text']};
  }
`

export const PriceDetails = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
  }

  .total {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .confirm {
    margin-top: 1.5rem;
    background: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme.white};
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`