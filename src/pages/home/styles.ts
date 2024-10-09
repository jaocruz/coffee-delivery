import styled from "styled-components";

export const HomeContainer = styled.main`
   padding: 0 10rem;
`

export const HomeIntro = styled.div`
   height: 34rem;
   display: grid;

   grid-template-areas:
   "mainText image"
   "homeItem image";

   align-items: center;
   align-content: center;
   justify-content: space-between;

   &:before {
      content: "";
      position: absolute;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      z-index: -1;
      background: url("./home-background.svg") center/cover no-repeat;
   }

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

    .coffee{
      background: ${props => props.theme["purple"]};
    }
`

export const CoffeeList = styled.div`
   display: flex;
   flex-direction: column;
   
   gap: 3.375rem;
   margin-top: 2rem;

   h1 {
      font-size: 2rem;
      font-weight: bolder;
      font-family: 'Baloo 2', sans-serif;

      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
   }

   .list{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      
      flex-wrap: wrap;

      row-gap: 2.5rem;
      column-gap: 2rem;

      margin-bottom: 9.8rem;
   }
`