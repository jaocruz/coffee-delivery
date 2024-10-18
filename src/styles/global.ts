import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      color: ${props => props.theme["base-text"]};
      background: ${props => props.theme.background};
   }

   body, input, textarea, button {
      font-size: 1rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
   }

   a {
      text-decoration: none;
      color: ${props => props.theme.white};
   }
`