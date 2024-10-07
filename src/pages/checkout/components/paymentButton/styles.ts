import styled from "styled-components"

export const PaymentButtonContainer = styled.button`
   display: flex;
   align-items: center;

   cursor: pointer;

   gap: 0.75rem;
   padding: 1rem;

   border: 0;
   border-radius: 0.375rem;

   transition: background 0.15s ease-in-out;

   background: ${porps => porps.theme["base-button"]};

   svg{
      color: ${porps => porps.theme.purple};
   }

   span{
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 160%;
      text-transform: uppercase;
      color: ${porps => porps.theme["base-text"]};
   }

   &:hover{
      background: ${porps => porps.theme["base-hover"]};
   }

   &:focus{
      background: ${porps => porps.theme["purple-light"]};
      outline: 1px solid ${porps => porps.theme.purple};
   }
`