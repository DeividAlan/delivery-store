import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react';
import {
  PaymentButton,
  PaymentContainer,
  PaymentHeader,
  PaymentTypes,
} from './styles';

export function PaymentMethod() {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} />
        <span>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
      </PaymentHeader>
      <PaymentTypes>
        <PaymentButton>
          <CreditCard size={16} />
          <p>Cartão de crédito</p>
        </PaymentButton>
        <PaymentButton>
          <Bank size={16} />
          <p>cartão de débito</p>
        </PaymentButton>
        <PaymentButton>
          <Money size={16} />
          <p>dinheiro</p>
        </PaymentButton>
      </PaymentTypes>
    </PaymentContainer>
  );
}
