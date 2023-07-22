import { styled } from 'styled-components';

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  background: ${props => props.theme['base-button']};
  border-radius: 6px;

  input {
    display: flex;
    height: 2.375rem;
    width: 1.25rem;
    gap: 0.25rem;
    border: none;
    background: transparent;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  button {
    padding: 0.4rem;
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;

    svg {
      fill: ${props => props.theme['purple']};
    }
  }
`;
