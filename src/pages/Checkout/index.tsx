import { AddressForm } from './components/AddressForm';
import { OrderProduct } from './components/OrderProduct';
import { PaymentMethod } from './components/PaymentMethod';
import {
  CheckoutContainer,
  CheckoutTitle,
  ConfirmedButton,
  OrderComplement,
  OrderResume,
  ResumText,
  Resume,
  ResumveValue,
  TotalText,
} from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderComplement>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <AddressForm />
        <PaymentMethod />
      </OrderComplement>
      <OrderResume>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
        <div>
          <OrderProduct name="Expresso Tradicional" />
          <hr />
          <OrderProduct name="Lattel" />
          <hr />
          <Resume>
            <span>
              <ResumText>Total de itens</ResumText>
              <ResumveValue>R$ 29,70</ResumveValue>
            </span>
            <span>
              <ResumText>Entrega</ResumText>
              <ResumveValue>R$ 3,50</ResumveValue>
            </span>
            <span>
              <TotalText>Total</TotalText>
              <TotalText>R$ 33,20</TotalText>
            </span>
          </Resume>
          <ConfirmedButton to="/success">confirmar pedido</ConfirmedButton>
        </div>
      </OrderResume>
    </CheckoutContainer>
  );
}
