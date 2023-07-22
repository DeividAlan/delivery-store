import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import { OrderInfo, OrderInfoContainer, SuccessContainer } from './styles';
import successImage from './../../assets/success-image.png';

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
        <OrderInfoContainer>
          <OrderInfo color="purple">
            <MapPin weight="fill" size={32} />
            <span>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </span>
          </OrderInfo>
          <OrderInfo color="yellow">
            <Timer weight="fill" size={32} />
            <span>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </span>
          </OrderInfo>
          <OrderInfo color="yellow-dark">
            <CurrencyDollar weight="fill" size={32} />
            <span>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédit</strong>
            </span>
          </OrderInfo>
        </OrderInfoContainer>
      </div>
      <img src={successImage} alt="Success Image" />
    </SuccessContainer>
  );
}
