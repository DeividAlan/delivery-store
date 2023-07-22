import { styled } from 'styled-components';

export const PaymentContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  margin-top: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  border-radius: 6px;
  background: ${props => props.theme['base-card']};
`;

export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  & > svg {
    fill: ${props => props.theme.purple};
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

export const PaymentTypes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 0.75rem;
`;

export const PaymentButton = styled.button`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  cursor: pointer;

  border: none;
  border-radius: 6px;
  background: ${props => props.theme['base-button']};

  & > svg {
    fill: ${props => props.theme.purple};
  }

  p {
    color: ${props => props.theme['base-text']};
    font-family: 'Roboto';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
