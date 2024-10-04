import styled from "styled-components";

export const HomeContainer = styled.main`
   padding: 0 10rem;

   background: url("./home-background.svg");
   background-size: cover;
`

export const HomeIntro = styled.div`
   height: 30rem;
   display: grid;

   grid-template-areas:
   "mainText image"
   "homeItem image";

   align-items: center;
   align-content: center;
   justify-content: space-between;

   .title{
      grid-area: mainText;

      display: flex;
      flex-direction: column;

      width: 36.75rem;
      
      gap: 1rem;
      margin-bottom: 2rem;
   }

   .title > h1 {
      font-size: 3rem;
      font-weight: bolder;
      font-family: 'Baloo 2', sans-serif;

      line-height: 130%;
      color: ${props => props.theme["base-title"]};
   }

   .title > span {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
   }

   .items{
      grid-area: homeItem;

      display: grid;
      grid-template-columns: auto auto;

      row-gap: 1.25rem;
      column-gap: 2.5rem;
   }

   img {
      grid-area: image;
   }
`

export const SeparatedItem = styled.div`
   display: flex;
   align-items: center;

   gap: 0.75rem;
   color: ${props => props.theme["base-text"]};

    svg {
      width: 2rem;
      height: 2rem;

      padding: 0.5rem;
      border-radius: 999px;

      color: ${props => props.theme.white};
    }

    .cart{
      background: ${props => props.theme["yellow-dark"]};
    }

    .package{
      background: ${props => props.theme["base-text"]};
    }

    .timer{
      background: ${props => props.theme["yellow"]};
    }

    .coffe{
      background: ${props => props.theme["purple"]};
    }
`