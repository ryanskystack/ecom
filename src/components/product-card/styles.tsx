import styled from "styled-components";

export const Description = styled.div`
  position: absolute;
  top: 100px;
  width: 80%;
  font-size: 20px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0);
      transition: background 0.3s ease-in-out;
      z-index: 2;
    }
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    z-index: 3;
  }

  &:hover {
    img {
      opacity: 0.4;
    }

    ${Description} {
      opacity: 1;
      z-index: 3;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
      font-size: 13px;
    }

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }

  @media screen and (max-width: 400px) {
    button {    
      font-size: 10px;
    }
  }

  @media screen and (max-width: 400px) {
    button {    
      font-size: 8px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    flex-direction: column;
  }

`;

export const Name = styled.div`
  width: 90%;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const Price = styled.div`
  width: 10%;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

