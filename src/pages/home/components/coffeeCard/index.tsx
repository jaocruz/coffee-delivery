import { ButtonCart, CoffeBuyingInfo, CoffeCardContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

import { Stepper } from "../../../../components/stepper";

import { CoffeeOnOrderProps } from "../..";

import { useState } from "react";

interface Tag{
   name: string
}

interface CoffeePropsData{
   id: number
   tags: Tag[]
   name: string
   value: number
   photo: string
   description: string
   onAddNewCoffeeToOrder: (coffee: CoffeeOnOrderProps) => void
}

export function CoffeeCard(data: CoffeePropsData){
   const [quantity, setQuantity] = useState(1)

   function handleAddNewCoffeeToOrder(){
      data.onAddNewCoffeeToOrder({
         id: data.id,
         name: data.name,
         value: data.value,
         photo: data.photo,
         quantity: quantity
      })
   }

   return(
      <CoffeCardContainer>
         <img src={data.photo} alt="" />

         <div className="tags">
            {data.tags.map(tag => {
               return(
                  <span key={tag.name}>{tag.name.toUpperCase()}</span>
               )
            })}
         </div>

         <h1>{data.name}</h1>
         <h2>{data.description}</h2>

         <CoffeBuyingInfo>
            <h3>{data.value.toFixed(2)}</h3>

            <div>
               <Stepper
               itemCounter={quantity}
               setItemCounter={setQuantity}
               />

               <ButtonCart onClick={handleAddNewCoffeeToOrder}>
                  <ShoppingCart weight="fill" size={22}/>
               </ButtonCart>
            </div>
         </CoffeBuyingInfo>
      </CoffeCardContainer>
   )
}