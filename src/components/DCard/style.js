import styled, { injectGlobal } from 'styled-components';

export const Card = styled.div`
    position: relative;
    display: inline-block;
    margin:10px;
    border-radius: 4px;
    box-shadow: #ccc 1px 2px 8px;
    min-width: calc(50% - 20px);
    @media(max-width:1000px){
      display:block;
      width: calc (100% - 10px);
    }
`;

export const Button = styled.button`
  border-color: cornflowerblue !important;
  color: cornflowerblue !important;
  padding: 0.5em 1em !important;
`;

export const PaymentWrapper = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color:#fff;
  z-index: 1000;
`;

export const CardFooter = styled.div`
  align-items: center;
  display: flex;
  height: 55px;
  font-size: 16px;
  justify-content: space-between!important;
  line-height: 24px;
  padding: 5px;
`;

export const CardBodyImage = styled.img`
  height: 300px; 
  width: 550px;
  display: block;
`;

export const PaymentBodyWrapper = styled.div`
  padding: 15% 10%;
  text-align: center;
  cursor: pointer;
  opacity: 1;
  line-height: 32px;
  @media(max-width: 1000px){
    font-style:normal;
    font-size: 21px;
  }
`;

export const BtnPaymentWrapper = styled.div`
  margin:20px;
  text-align: center;
`;

export const CloseButton = styled.div`
  position:absolute;
  top: 20px;
  right: 20px;
  background-image: url(images/close.png);
  background-repeat: no-repeat;
  background-size: 1em 1em;
  background-position: center;
  width: 1em;
  height: 1em;
  object-fit: contain;
  cursor:pointer;
`;


export const GlobalStyle = injectGlobal`
  input {
    text-align: left;
    font-size: 1em;
    width: 1em;
    height: 0.8em;
    margin-left: 1em;
    cursor: pointer;
  },
  label {
    font-style: normal;
    font-size: 20px;
  }
`;

export const SelectAmount =  styled.p`
  font-style: normal;
  font-size: 20px;
  @media(max-width: 1000px){
    font-size: 36px;
    margin-bottom: 1em;
  }
`;

export const FooterButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 25px;
  @media(max-width: 1000px){
    display: block;
    position: relative;
    right: 10px;
  }
`;

export const commonStyles = {
  show:{
    display: 'block',
    opacity: 0.9,
  },
  hide:{
    display: 'none',
  },
};
