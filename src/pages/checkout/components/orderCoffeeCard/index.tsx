import { OrderCardContainer, RemoveButton } from "./styles"

import { Trash } from "phosphor-react"

import { Stepper } from "../../../../components/stepper"

import { CoffeeDataProps, CoffeeOrderContext } from "../../../../contexts/orderContext"

import { useContext, useEffect, useState } from "react"

interface OrderCoffeeCardProps{
   coffee: CoffeeDataProps
   onRemoveCoffeFroOrder: (coffeeToRemove: CoffeeDataProps) => void
}

export function OrderCoffeeCard({coffee, onRemoveCoffeFroOrder}: OrderCoffeeCardProps){
   const {updateTotalOrderPrice} = useContext(CoffeeOrderContext)

   const [quantity, setQuantity] = useState(coffee.quantity)
   
   function handleRemoveCoffeFroOrder(){
      onRemoveCoffeFroOrder({...coffee})
   }

   useEffect(() => {
      if(quantity !== coffee.quantity){
         updateTotalOrderPrice(coffee.id, quantity)
      }
   }, [quantity, coffee.id, updateTotalOrderPrice])

   return(
      <OrderCardContainer>
         <div className="coffee">
            <img src={coffee.photo} alt="" />

            <div className="coffee-info">
               <span>{coffee.name}</span>

               <div className="buttons">
                  <Stepper
                  itemCounter={quantity}
                  setItemCounter={setQuantity}
                  />

                  <RemoveButton type="button" onClick={handleRemoveCoffeFroOrder}>
                     <Trash size={16}/>
                     Remover
                  </RemoveButton>
               </div>
            </div>
         </div>

         <strong>R$ {(coffee.value * quantity).toFixed(2)}</strong>
      </OrderCardContainer>
   )
}