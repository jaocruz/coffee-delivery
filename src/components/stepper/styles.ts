import styled from "styled-components"

export const StepperContainer = styled.div`
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