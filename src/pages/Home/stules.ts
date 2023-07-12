import { styled } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

export const HomeContainer = styled.main`
  width: 100%;
`;

export const BannerContainer = styled.main`
  height: 34rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  & > div {
    h1 {
      display: flex;
      flex-direction: column;
      align-self: stretch;

      color: ${props => props.theme['base-title']};
      font-family: 'Baloo 2';
      font-size: 3rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;

      margin-bottom: 1rem;
    }

    p {
      display: flex;
      flex-direction: column;
      align-self: stretch;

      color: ${props => props.theme['base-subtitle']};
      font-family: 'Roboto';
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      margin-bottom: 4.13rem;
    }

    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.25rem 0;
    }
  }
`;

interface StatusProps {
  statusColor: keyof typeof defaultTheme;
}

export const DeliveryInfo = styled.span<StatusProps>`
  display: flex;
  align-items: center;

  color: ${props => props.theme['base-subtitle']};
  font-family: 'Roboto';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  svg {
    background: ${props => props.theme[props.statusColor]};
    fill: ${props => props.theme.white};
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }
`;
