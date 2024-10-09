import styled from "styled-components"

export const OrderCardContainer = styled.div`
   padding: 0.5rem 0.25rem;
   background: ${props => props.theme["base-card"]};

   display: flex;
   justify-content: space-between;

   .coffee{
      display: flex;
      column-gap: 1.25rem;
   }

   img{
      width: 4rem;
      height: 4rem;
   }

   .coffee-info{
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;
   }

   .coffee-info > span{
      font-size: 1rem;
      font-weight: 500;
   }

   .buttons{
      display: flex;
      column-gap: 0.5rem;
      align-items: center;
   }
`

export const RemoveButton = styled.button`
   background: red;
   padding: 0 0.5rem;
   
   height: 100%;
   align-items: center;
   
   display: flex;
   column-gap: 0.25rem;

   border: 0;

   text-transform: uppercase;

   border-radius: 0.375rem;

   font-size: 0.75rem;

   cursor: pointer;

   transition: background 0.15s ease-in-out;

   color: ${props => props.theme["base-text"]};
   background: ${props => props.theme["base-button"]};

   svg{
      color: ${props => props.theme.purple};
   }

   &:hover{
      background: ${props => props.theme["base-hover"]};
   }
`