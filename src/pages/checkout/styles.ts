import styled from "styled-components";

export const CheckoutContainer = styled.main`
   padding: 0 10rem;

   form{
      display: grid;

      align-items: start;

      grid-template-areas:
      "titulo1 titulo2"
      "entrega pedido";

      grid-template-columns: 1fr 28rem;

      column-gap: 2rem;
      margin-bottom: 6rem;
   }

   label{
      margin: 2.5rem 0 1rem;

      font-size: 1.125rem;
      font-weight: bold;
      font-family: 'Baloo 2';
      color: ${props => props.theme["base-subtitle"]};
   }

   .finish-order{
      grid-area: entrega;

      display: flex;
      flex-direction: column;

      row-gap: 0.75rem;
   }
`

export const BaseContainer = styled.div`
   display: flex;
   flex-direction: column;
   
   gap: 2rem;
   padding: 2.5rem;

   border-radius: 0.5rem;
   background: ${props => props.theme["base-card"]};

   .form-header{
      display: grid;

      grid-template-areas:
      "svg title" "svg span";

      grid-template-columns: auto 1fr;

      row-gap: 0.125rem;
      column-gap: 0.5rem;
   }

   .form-header > svg{
      grid-area: svg;
   }

   .form-header > h1{
      grid-area: title;

      margin: 0;
      font-size: 1rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme["base-subtitle"]};
   }

   .form-header > span{
      grid-area: span;
      font-size: 0.875rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme["base-text"]};
   }

   .payment-buttons{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 0.75rem;
   }

   .address-icon{
      color: ${props => props.theme["yellow-dark"]};
   }

   .payment-icon{
      color: ${props => props.theme["purple-dark"]};
   }
`

export const CoffeeOrderContainer = styled(BaseContainer)`
   row-gap: 1.5rem;

   border-top-right-radius: 2.75rem;
   border-bottom-left-radius: 2.75rem;

   .divider{
      height: 0;
      border: 1px solid ${props => props.theme["base-button"]};
   }

   .coffeeInfo{
      display: grid;
      row-gap: 0.75rem;
   }

   .coffeeInfo > div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${props => props.theme["base-text"]};
   }

   .coffeeInfo > div span:first-child{
      font-size: 0.875rem;
      font-weight: 400;
   }

   .coffeeInfo > div strong{
      font-size: 1.25rem;
      font-weight: bold;
      color: ${props => props.theme["base-subtitle"]};
   }
`

export const ConfirmButton = styled.button`
   border: 0;
   border-radius: 0.375rem;

   padding: 0.75rem 0.5rem;

   cursor: pointer;

   text-transform: uppercase;
   font-size: 0.875rem;
   font-weight: bold;

   transition: background 0.1s ease-in-out;

   color: ${props => props.theme.white};
   background: ${props => props.theme.yellow};

   &:hover{
      background: ${props => props.theme["yellow-dark"]};
   }
`

export const FormContent = styled.div`
   display: flex;
   flex-direction: column;
   
   gap: 1rem;

   div:first-child{
      width: fit-content;
   }

   .info-line01{
      display: grid;
      column-gap: 0.75rem;
      grid-template-columns: auto 1fr;
   }

   .info-line02{
      display: grid;
      column-gap: 0.75rem;
      grid-template-columns: auto 1fr 3.75rem;
   }
`