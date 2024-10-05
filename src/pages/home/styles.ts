import styled from "styled-components";

export const HomeContainer = styled.main`
   padding: 0 10rem;
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

    .coffe{
      background: ${props => props.theme["purple"]};
    }
`

export const CoffeList = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;


   gap: 3.375rem;

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

export const CoffeCard = styled.div`
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

   .coffe-infos{
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
   }

   .buy-section{
      display: flex;
      gap: 0.5rem;
   }

   .stepper{
      display: flex;
      align-items: center;
      gap: 0.5rem;

      background: ${props => props.theme["base-button"]};

      padding: 0.5rem;
      border-radius: 0.375rem;

      h1{
         font-weight: 400;
         font-size: 1rem;
      }

      svg{
         cursor: pointer;
      }
   }

   button {
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
   }
`