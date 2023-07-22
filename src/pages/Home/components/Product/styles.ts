import { styled } from 'styled-components';

export const ProductContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;
  background: ${props => props.theme['base-card']};

  & > img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    margin-top: 0.75rem;
  }

  & > h1 {
    color: ${props => props.theme['base-subtitle']};
    text-align: center;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-top: 1rem;
  }

  & > p {
    color: ${props => props.theme['base-label']};
    text-align: center;
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    width: 13.5rem;
    margin-top: 0.5rem;
  }

  & > footer {
    display: flex;
    align-items: center;
    margin-top: 2.6rem;
    padding: 0 1.5rem;

    p {
      color: ${props => props.theme['base-text']};
      text-align: right;
      font-family: 'Roboto';
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      margin-right: 1.375rem;

      span {
        font-family: 'Baloo 2';
        font-size: 1.5rem;
        font-weight: 800;
      }
    }

    & > button {
      background: ${props => props.theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 6px;
      align-items: center;
      justify-content: center;
      display: flex;
      border: none;
      cursor: pointer;

      svg {
        fill: ${props => props.theme.white};
      }
    }
  }
`;

export const ProductTag = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 6.25rem;
  background: ${props => props.theme['yellow-light']};

  color: ${props => props.theme['yellow-dark']};
  font-family: 'Roboto';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
`;
