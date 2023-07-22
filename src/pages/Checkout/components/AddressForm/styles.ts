import { styled } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  border-radius: 6px;
  background: ${props => props.theme['base-card']};
`;

export const FormHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  & > svg {
    fill: ${props => props.theme['yellow-dark']};
  }

  h3 {
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  p {
    color: ${props => props.theme['base-text']};
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;

  #cep {
    width: 12.5rem;
  }

  #rua {
    width: 100%;
  }

  #numero {
    width: 12.5rem;
  }

  #complemento {
    flex: 1;
  }

  #bairro {
    width: 12.5rem;
  }

  #cidade {
    flex: 1;
  }

  #uf {
    width: 3.75rem;
  }

  & > span {
    display: flex;
    width: 100%;
    gap: 0.75rem;
  }
`;

export const FormInput = styled.input`
  padding: 0.75rem;

  border-radius: 0.25rem;
  border: 1px solid ${props => props.theme['base-button']};
  background: ${props => props.theme['base-input']};
`;
