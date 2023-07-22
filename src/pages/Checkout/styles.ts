import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const CheckoutContainer = styled.main`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding-top: 2.5rem;
`;

export const CheckoutTitle = styled.h1`
  color: ${props => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;

  margin-bottom: 0.94rem;
`;

export const OrderComplement = styled.div`
  max-width: 40rem;
  width: 100%;
`;

export const OrderResume = styled.div`
  width: 28rem;

  & > div {
    display: flex;
    width: 28rem;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    border-radius: 6px 44px;
    background: ${props => props.theme['base-card']};

    hr {
      width: 100%;
      border: 1px solid ${props => props.theme['base-button']};
    }
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 0.75rem;

  span {
    display: flex;
    justify-content: space-between;
  }
`;

export const ResumText = styled.p`
  color: ${props => props.theme['base-text']};
  text-align: right;

  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
`;

export const ResumveValue = styled.p`
  color: ${props => props.theme['base-text']};
  text-align: right;

  font-family: 'Roboto';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
`;

export const TotalText = styled.p`
  color: ${props => props.theme['base-subtitle']};
  text-align: right;
  font-family: 'Roboto';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
`;

export const ConfirmedButton = styled(NavLink)`
  width: 100%;
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: none;
  cursor: pointer;
  text-decoration: none;

  border-radius: 6px;
  background: ${props => props.theme.yellow};

  color: ${props => props.theme.white};
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
`;
