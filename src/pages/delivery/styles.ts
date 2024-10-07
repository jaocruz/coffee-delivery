import styled from "styled-components";

export const DeliveryContainer = styled.main`
   padding: 5rem 10rem;

   display: grid;

   row-gap: 2.5rem;
   column-gap: 6.35rem;

   justify-content: space-between;
   grid-template-columns: 1fr auto;

   grid-template-areas:
   "main-text img"
   "orderinfo img";

   align-items: end;

   .main-text{
      grid-area: main-text;
   }

   .main-text > h1{
      font-size: 2rem;
      font-weight: bolder;
      font-family: 'Baloo 2', sans-serif;

      line-height: 130%;
      color: ${props => props.theme["yellow-dark"]};
   }

   .main-text > h2{
      font-size: 1.25rem;
      font-weight: 400;

      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
   }

   img{
      grid-area: img;
   }
`

export const OrderInfo = styled.div`
   grid-area: orderinfo;

   position: relative;

   display: flex;
   flex-direction: column;

   row-gap: 2rem;
   padding: 2.5rem;

   background: ${props => props.theme.background};

   border-top-left-radius: calc(0.375rem - 1px);
   border-bottom-right-radius: calc(0.375rem - 1px);

   border-top-right-radius: calc(2.25rem - 1px);
   border-bottom-left-radius: calc(2.25rem - 1px);

   &::before{
      content: '';
      z-index: -1;

      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;

      position: absolute;

      border-top-left-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;

      border-top-right-radius: 2.25rem;
      border-bottom-left-radius: 2.25rem;

      background-image: linear-gradient(135deg, ${props => props.theme["yellow-dark"]} 0%, ${props => props.theme.purple});
   }

   .item{
      display: grid;

      grid-template-areas:
      "svg span" "svg strong";

      grid-template-columns: auto 1fr;

      align-items: center;

      column-gap: 0.75rem;
   }

   .item > h1{
      display: flex;
      grid-area: svg;

      padding: 0.5rem;
      border-radius: 999px;

      color: ${props => props.theme.white};
   }

   .map-delivery{
      background: ${props => props.theme.purple};
   }

   .timer-delivery{
      background: ${props => props.theme.yellow};
   }

   .dollar-delivery{
      background: ${props => props.theme["yellow-dark"]};
   }
`