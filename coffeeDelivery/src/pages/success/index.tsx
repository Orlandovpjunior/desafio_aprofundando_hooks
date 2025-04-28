import { SuccessContainer, InfoContainer } from './styles'
import illustration from '../../assets/Illustration.svg'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { useLocation, Navigate } from 'react-router-dom'

interface AddressData {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  paymentMethod: "credit" | "debit" | "cash"
}

export function Success() {
  const location = useLocation()
  const address = location.state as AddressData

  if (!address) {
    return <Navigate to="/" />  // se tentar acessar direto sem dados, redireciona para Home
  }

  return (
    <SuccessContainer>
      <div className="text">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <InfoContainer>
          <div className="info-item purple">
            <MapPin size={16} weight="fill" />
            <div>
              <p>Entrega em <strong>{address.street}, {address.number}</strong></p>
              <p>{address.district} - {address.city}, {address.uf}</p>
            </div>
          </div>

          <div className="info-item yellow">
            <Timer size={16} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </div>

          <div className="info-item yellow-dark">
            <CurrencyDollar size={16} weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>{formatPaymentMethod(address.paymentMethod)}</strong></p>
            </div>
          </div>
        </InfoContainer>
      </div>

      <img src={illustration} alt="Entrega de café" />
    </SuccessContainer>
  )
}

function formatPaymentMethod(method: "credit" | "debit" | "cash") {
  switch (method) {
    case "credit":
      return "Cartão de Crédito"
    case "debit":
      return "Cartão de Débito"
    case "cash":
      return "Dinheiro"
  }
}
