import { OrderCardContainer, RemoveButton } from "./styles"

import { Trash } from "phosphor-react"

import { Stepper } from "../../../../components/stepper"

import { useContext, useEffect, useState } from "react"
import { CoffeeOrderContext } from "../../../../contexts/orderContext"

interface CoffeeCardOnOrderProps{
   id: number
   name: string
   photo: string
   value: number
   quantity: number
}

export function OrderCoffeeCard(data: CoffeeCardOnOrderProps){
   return(
      <OrderCardContainer>
         <div className="coffee">
            <img src={data.photo} alt="" />

            <div className="coffee-info">
               <span>{data.name}</span>

               <div className="buttons">
                  <Stepper
                  itemCounter={data.quantity}
                  setItemCounter={() => console.log('teste temporario')}
                  />

                  <RemoveButton type="button">
                     <Trash size={16}/>
                     Remover
                  </RemoveButton>
               </div>
            </div>
         </div>

         <strong>R$ {(data.value * data.quantity).toFixed(2)}</strong>
      </OrderCardContainer>
   )
}