import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    button {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      border-radius: 6px;
      background: ${props => props.theme['purple-light']};
      border: none;

      & > svg {
        fill: ${props => props.theme.purple};
      }

      & > span {
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme['purple-dark']};
      }
    }

    a {
      display: flex;
      width: 2.375rem;
      height: 2.375rem;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme['yellow-light']};
      border-radius: 6px;

      svg {
        fill: ${props => props.theme['yellow-dark']};
      }
    }
  }
`;
