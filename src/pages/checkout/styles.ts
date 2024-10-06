import styled from "styled-components";

export const CheckoutContainer = styled.main`
   padding: 0 10rem;

   h1{
      margin: 2.5rem 0 1rem;

      font-size: 1.125rem;
      font-weight: bold;
      font-family: 'Baloo 2';
      color: ${props => props.theme["base-subtitle"]};
   }

   .finish-order{
      display: flex;
      flex-direction: column;

      row-gap: 0.75rem;
   }
`
export const FormContainer = styled.div`
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
      color: ${props => props.theme["yellow-dark"]};
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
`

export const FormContent = styled.form`
   display: grid;
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

export const PaymentMethodContainer = styled.div`
   padding: 2.5rem;
   border-radius: 0.375rem;

   display: flex;
   flex-direction: column;

   row-gap: 2rem;

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
      color: ${props => props.theme["purple-dark"]};
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
      display: flex;
      column-gap: 0.75rem;
   }
`

export const PaymentButton = styled.button`
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

   &:active{
      outline: 1px solid ${porps => porps.theme.purple};
   }
`