import { MapPinLine } from '@phosphor-icons/react';
import { FormBody, FormContainer, FormHeader, FormInput } from './styles';

export function AddressForm() {
  return (
    <FormContainer>
      <FormHeader>
        <MapPinLine size={22} />
        <span>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </FormHeader>
      <FormBody>
        <FormInput id="cep" placeholder="CEP" />
        <FormInput id="rua" placeholder="Rua" />
        <span>
          <FormInput id="numero" placeholder="Número" />
          <FormInput id="complemento" placeholder="Complemento" />
        </span>
        <span>
          <FormInput id="bairro" placeholder="Bairro" />
          <FormInput id="cidade" placeholder="Cidade" />
          <FormInput id="uf" placeholder="UF" />
        </span>
      </FormBody>
    </FormContainer>
  );
}
