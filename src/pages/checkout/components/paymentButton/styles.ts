import styled from "styled-components"

interface PaymentButtonProps {
   isActive: boolean
}

export const PaymentButtonContainer = styled.button<PaymentButtonProps>`
   display: flex;
   align-items: center;

   cursor: pointer;

   gap: 0.75rem;
   padding: 1rem;

   border: 0;
   border-radius: 0.375rem;

   transition: background 0.15s ease-in-out;

   background: ${props => props.theme["base-button"]};

   outline: ${({ isActive, theme }) => isActive ? `1px solid ${theme.purple}` : 'none'};
   background: ${({ isActive, theme }) => isActive ? theme["purple-light"] : theme["base-button"]};

   svg{
      color: ${props => props.theme.purple};
   }

   span{
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 160%;
      text-transform: uppercase;
      color: ${props => props.theme["base-text"]};
   }

   &:hover{
      background: ${props => props.theme["base-hover"]};
   }
`