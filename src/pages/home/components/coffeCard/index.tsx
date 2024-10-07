import { Stepper } from "../../../../components/stepper";
import { ButtonCart, CoffeBuyingInfo, CoffeCardContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

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
               <Stepper />

               <ButtonCart>
                  <ShoppingCart weight="fill" size={22}/>
               </ButtonCart>
            </div>
         </CoffeBuyingInfo>
      </CoffeCardContainer>
   )
}