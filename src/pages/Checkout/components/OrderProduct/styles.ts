import { styled } from 'styled-components';

export const OrderProductContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  background: ${props => props.theme['base-card']};

  & > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      display: flex;
      width: 4rem;
      height: 4rem;
      justify-content: center;
      align-items: center;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      & > p {
        color: ${props => props.theme['base-subtitle']};
        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
      }

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  & > p {
    color: ${props => props.theme['base-text']};
    text-align: right;
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  height: 2.375rem;
  padding: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  border: none;
  border-radius: 0.375rem;
  background: ${props => props.theme['base-button']};

  svg {
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
