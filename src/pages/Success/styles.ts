import { styled } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

export const SuccessContainer = styled.main`
  width: 100%;
  display: flex;
  padding-top: 5rem;
  gap: 6rem;

  & > div {
    h1 {
      color: ${props => props.theme['yellow-dark']};

      font-family: 'Baloo 2';
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
    }

    h3 {
      margin-top: 0.25rem;
      color: ${props => props.theme['base-subtitle']};

      font-family: 'Roboto';
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
    }
  }

  img {
    width: 30.75rem;
    height: 18.3125rem;
    margin-top: 6.25rem;
  }
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  width: 32.875rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    padding: 0.1rem;
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    background: linear-gradient(to right, #dbac2c, #8047f8);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

interface OrderInfoProps {
  color: keyof typeof defaultTheme;
}

export const OrderInfo = styled.div<OrderInfoProps>`
  display: flex;
  align-items: center;

  svg {
    background: ${props => props.theme[props.color]};
    fill: ${props => props.theme.white};
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }

  p {
    color: ${props => props.theme['base-text']};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  strong {
    color: ${props => props.theme['base-text']};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
  }
`;
