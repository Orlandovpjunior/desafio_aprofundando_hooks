import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CheckoutContainer, AddressForm, PaymentOptions, SelectedCoffees, CoffeeCard, PriceDetails } from "./styles";
import { MapPinLine, CurrencyDollar, Trash, CreditCard, Bank, Money } from '@phosphor-icons/react';

export function Checkout() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext)

  const totalItems = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace(',', '.')) * item.quantity), 0)
  const deliveryFee = 3.5
  const totalOrder = totalItems + deliveryFee

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"credit" | "debit" | "cash" | null>(null)

  function handleSelectPayment(method: "credit" | "debit" | "cash") {
    setSelectedPaymentMethod(method)
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <AddressForm>
          <div className="form-header">
            <MapPinLine size={22} className="icon-map" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <div className="row">
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </div>
          <div className="row">
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
        </AddressForm>

        <PaymentOptions>
          <div className="form-header">
            <CurrencyDollar size={22} className="icon-dollar" />
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div className="options">
            <button
              type="button"
              onClick={() => handleSelectPayment('credit')}
              className={selectedPaymentMethod === 'credit' ? 'active' : ''}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </button>

            <button
              type="button"
              onClick={() => handleSelectPayment('debit')}
              className={selectedPaymentMethod === 'debit' ? 'active' : ''}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>

            <button
              type="button"
              onClick={() => handleSelectPayment('cash')}
              className={selectedPaymentMethod === 'cash' ? 'active' : ''}
            >
              <Money size={16} />
              DINHEIRO
            </button>
          </div>
        </PaymentOptions>
      </div>

      <div>
        <h2>Cafés selecionados</h2>

        <SelectedCoffees>
          {cartItems.map(item => (
            <CoffeeCard key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="details">
                <p>{item.name}</p>
                <div className="actions">
                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button className="remove" onClick={() => removeFromCart(item.id)}>
                    <Trash size={16} /> REMOVER
                  </button>
                </div>
              </div>
              <strong>R$ {(parseFloat(item.price.replace(',', '.')) * item.quantity).toFixed(2).replace('.', ',')}</strong>
            </CoffeeCard>
          ))}

          <PriceDetails>
            <div>
              <span>Total de itens</span>
              <span>R$ {totalItems.toFixed(2).replace('.', ',')}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>R$ {totalOrder.toFixed(2).replace('.', ',')}</span>
            </div>

            <button className="confirm">CONFIRMAR PEDIDO</button>
          </PriceDetails>
        </SelectedCoffees>
      </div>
    </CheckoutContainer>
  )
}
