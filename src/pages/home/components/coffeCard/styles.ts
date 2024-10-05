import styled from "styled-components";

export const CoffeCardContainer = styled.div`
   width: 16rem;

   padding: 1.25rem;

   display: flex;
   flex-direction: column;

   text-align: center;
   align-items: center;

   border-top-right-radius: 2rem;
   border-bottom-left-radius: 2rem;

   border-top-left-radius: 0.375rem;
   border-bottom-right-radius: 0.375rem;

   background-color: ${props => props.theme["base-card"]};

   img{
      margin-top: -20%;
      width: 7.5rem;
      height: 7.5rem;
   }

   span{
      width: fit-content;
      font-size: 0.625rem;
      font-weight: bold;

      border-radius: 999px;

      margin: 0.75rem 0 1rem;
      padding: 0.25rem 0.5rem;

      color: ${props => props.theme["yellow-dark"]};
      background: ${props => props.theme["yellow-light"]};
   }

   h1{
      font-size: 1.25rem;
      font-weight: bold;

      line-height: 130%;
      font-family: 'Baloo 2', sans-serif;

      color: ${props => props.theme["base-subtitle"]};
   }

   h2{
      font-size: 0.875rem;
      font-weight: 400;
      
      line-height: 130%;
      margin: 0.5rem 0 2rem;

      color: ${props => props.theme["base-label"]};
   }
`

export const CoffeBuyingInfo = styled.div`
   width: 100%;
   gap: 1.5rem;

   display: flex;
   align-items: center;
   justify-content: center;

   font-size: 0.875rem;

   h3{
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
   }

   h3:before{
      content: "R$ ";

      font-size: 0.875rem;
      font-weight: 500;
   }

   div{
      display: flex;
      gap: 0.5rem;
   }
`

export const Stepper = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;

   background: ${props => props.theme["base-button"]};

   padding: 0.5rem;
   border-radius: 0.375rem;

   h1{
      font-weight: 500;
      font-size: 1rem;
   }

   svg{
      cursor: pointer;
      color: ${props => props.theme["purple-dark"]};

      transition: color 0.15s ease-in-out;

      &:hover{
         color: ${props => props.theme.purple};
      }
   }
`

export const ButtonCart = styled.button`
   display: flex;

   border: 0;
   border-radius: 0.375rem;

   padding: 0.5rem;
   cursor: pointer;

   transition: background 0.1s ease-in-out;

   color: ${props => props.theme.white};
   background: ${props => props.theme["purple-dark"]};

   &:hover{
      background: ${props => props.theme.purple};
   }
`