import styled from "styled-components";

export const InputContainer = styled.div`
   outline: 0;

   display: flex;
   border-radius: 0.25rem;

   overflow: hidden;

   color: ${props => props.theme["base-label"]};
   background: ${props => props.theme["base-input"]};

   border: 1px solid ${props => props.theme["base-button"]};

   input{
      flex: 1;

      border: 0;
      outline: 0;

      padding: 0.75rem;
      background: none;

      font-size: 0.875rem;
      color: ${props => props.theme["base-text"]};
   }
`