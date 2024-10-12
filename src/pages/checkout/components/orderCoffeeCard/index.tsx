import { OrderCardContainer, RemoveButton } from "./styles"

import { Trash } from "phosphor-react"

import { Stepper } from "../../../../components/stepper"

import { CoffeeDataProps } from "../../../../contexts/orderContext"

interface OrderCoffeeCardProps{
   coffee: CoffeeDataProps
   onRemoveCoffeFroOrder: (coffeeToRemove: CoffeeDataProps) => void
}

export function OrderCoffeeCard({coffee, onRemoveCoffeFroOrder}: OrderCoffeeCardProps){

   function handleRemoveCoffeFroOrder(){
      onRemoveCoffeFroOrder({...coffee})
   }

   return(
      <OrderCardContainer>
         <div className="coffee">
            <img src={coffee.photo} alt="" />

            <div className="coffee-info">
               <span>{coffee.name}</span>

               <div className="buttons">
                  <Stepper
                  itemCounter={coffee.quantity}
                  setItemCounter={() => console.log('teste temporario')}
                  />

                  <RemoveButton type="button" onClick={handleRemoveCoffeFroOrder}>
                     <Trash size={16}/>
                     Remover
                  </RemoveButton>
               </div>
            </div>
         </div>

         <strong>R$ {(coffee.value * coffee.quantity).toFixed(2)}</strong>
      </OrderCardContainer>
   )
}