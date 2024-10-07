import { OrderCardContainer, RemoveButton } from "./styles"

import expressoCoffe from "/coffe-expresso.svg"

import { Stepper } from "../../../../components/stepper"
import { Trash } from "phosphor-react"

export function OrderCoffeCard(){
   return(
      <OrderCardContainer>
         <div className="coffee">
            <img src={expressoCoffe} alt="" />

            <div className="coffe-info">
               <span>Expresso Tradicional</span>

               <div className="buttons">
                  <Stepper />

                  <RemoveButton>
                     <Trash size={16}/>
                     Remover
                  </RemoveButton>
               </div>
            </div>
         </div>

         <strong>R$ 9,90</strong>
      </OrderCardContainer>
   )
}