import { HeaderContainer, LocaleButton, CartButton } from "./styles"

import mainLogo from '/main-logo.svg'

import { MapPin, ShoppingCart } from "phosphor-react"

export function Header(){
   return(
      <HeaderContainer>
         <img src={mainLogo} alt="" />

         <div className="headerButtons">
            <LocaleButton>
               <MapPin weight="fill" size={22}/>
               <span>Porto Alegre, RS</span>
            </LocaleButton>

            <CartButton>
               <ShoppingCart weight="fill" size={22}/>
            </CartButton>
         </div>
      </HeaderContainer>
   )
}