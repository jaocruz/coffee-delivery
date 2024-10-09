import { HeaderContainer, LocaleButton, CartButton } from "./styles"

import mainLogo from '/main-logo.svg'

import { MapPin, ShoppingCart } from "phosphor-react"

import { NavLink } from "react-router-dom"

export function Header(){
   return(
      <HeaderContainer>
         <NavLink to="/" title="home"><img src={mainLogo} alt="" /></NavLink>

         <div className="headerButtons">
            <LocaleButton>
               <MapPin weight="fill" size={22}/>
               <span>Porto Alegre, RS</span>
            </LocaleButton>

            <NavLink to="/checkout" title="checkout">
               <CartButton>
                  <ShoppingCart weight="fill" size={22}/>
               </CartButton>
            </NavLink>
         </div>
      </HeaderContainer>
   )
}