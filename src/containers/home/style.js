import styled, { injectGlobal, keyframes } from 'styled-components';

export const Message = styled.div`
 
`;

export const CardContainer = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const GlobalStyle = injectGlobal`
 
`;

export const InputLabel = styled.label`
  font-style: normal;
  font-size: 20px;
  @media(max-width: 1000px){
    font-size: 1.5em;
  }
`;

export const Radio =  styled.input`
  text-align: left;
  font-size: 1em;
  width: 1em;
  height: 0.8em;
  margin-left: 1em;
  cursor: pointer;
`;

export const Title = styled.h1`
  
`;

export const Subtitle = styled.p`
 
`;
