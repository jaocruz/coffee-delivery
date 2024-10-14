import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   padding: 2rem 10rem;

   align-items: center;
   justify-content: space-between;

   a{
      display: flex;
   }

   .headerButtons{
      display: flex;
      gap: 0.75rem;
   }
`

const HeaderButton = styled.button`
   display: flex;

   border: 0;
   cursor: pointer;

   padding: 0.5rem;
   border-radius: 6px;

   gap: 0.25rem;
   align-items: center;

   span{
      font-size: 0.875rem;
      color: ${props => props.theme["purple-dark"]};
   }
`

export const LocaleButton = styled(HeaderButton)`
   color: ${props => props.theme["purple"]};
   background: ${props => props.theme["purple-light"]};
`

export const CartButton = styled(HeaderButton)`
   position: relative;

   color: ${props => props.theme["yellow-dark"]};
   background: ${props => props.theme["yellow-light"]};

   .item-counter{
      position: absolute;

      top: -0.45em;
      right: -0.5rem;

      width: 1.25rem;
      height: 1.25rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 999px;

      font-size: 0.75rem;
      font-weight: bold;

      color: ${props => props.theme.white};
      background: ${props => props.theme["yellow-dark"]};
   }
`