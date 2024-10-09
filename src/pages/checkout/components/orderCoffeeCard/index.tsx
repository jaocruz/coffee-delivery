import { OrderCardContainer, RemoveButton } from "./styles"

import { Trash } from "phosphor-react"

import { Stepper } from "../../../../components/stepper"

import { useEffect, useState } from "react"

interface OrderCoffeeCardProps{
   name: string
   value: number
   photo: string
   quantity: number
}

export function OrderCoffeeCard({ name, value, photo, quantity }: OrderCoffeeCardProps){
   const [itemQuantity, setItemQuantity] = useState(quantity)
   const [coffeePrice, setCoffeePrice] = useState(value * quantity)

   useEffect(() => {
      setCoffeePrice(value * itemQuantity)
   }, [itemQuantity, value])

   return(
      <OrderCardContainer>
         <div className="coffee">
            <img src={photo} alt="" />

            <div className="coffee-info">
               <span>{name}</span>

               <div className="buttons">
                  <Stepper
                  quantity={itemQuantity}
                  setQuantity={setItemQuantity}
                  />

                  <RemoveButton type="button">
                     <Trash size={16}/>
                     Remover
                  </RemoveButton>
               </div>
            </div>
         </div>

         <strong>R$ {coffeePrice.toFixed(2)}</strong>
      </OrderCardContainer>
   )
}