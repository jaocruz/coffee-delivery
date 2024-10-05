import { ButtonCart, CoffeBuyingInfo, CoffeCardContainer, Stepper } from "./styles";

import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function CoffeCard(){
   return(
      <CoffeCardContainer>
         <img src="./coffe-expresso.svg" alt="" />

         <span>TRADICIONAL</span>
                  
         <h1>Expresso Tradicional</h1>
         <h2>O tradicional café feito com água quente e grãos moídos</h2>

         <CoffeBuyingInfo>
            <h3>9,90</h3>

            <div>
               <Stepper>
                  <Minus size={14}/>
                  <h1>1</h1>
                  <Plus size={14}/>
               </Stepper>

               <ButtonCart>
                  <ShoppingCart weight="fill" size={22}/>
               </ButtonCart>
            </div>
         </CoffeBuyingInfo>
      </CoffeCardContainer>
   )
}