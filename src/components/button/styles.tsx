import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 400px) {
    width: fit-content;
    min-width: unset;
    padding: 0 5px;
    font-size: 12px;
    height: fit-content;
    line-height: 30px;
  }
`;

BaseButton.displayName = 'BaseButton';

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

InvertedButton.displayName = 'InvertedButton';

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

ButtonSpinner.displayName = 'ButtonSpinner';