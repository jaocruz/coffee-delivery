import { ButtonCart, CoffeBuyingInfo, CoffeCardContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

import { Stepper } from "../../../../components/stepper";

import { useState } from "react";

import { CoffeeDataProps } from "../../../../contexts/orderContext";

interface CoffeeCardProps{
   coffee: CoffeeDataProps
   onAddNewCoffeToOrder: (newCoffee: CoffeeDataProps) => void
}

export function CoffeeCard({coffee, onAddNewCoffeToOrder}: CoffeeCardProps){
   const { name, photo, tags, value, description } = coffee

   const [quantity, setQuantity] = useState(1)

   function handleAddNewCoffeeToOrder(){
      onAddNewCoffeToOrder({...coffee, quantity})
   }

   return(
      <CoffeCardContainer>
         <img src={photo} alt="" />

         <div className="tags">
            {tags.map(tag => {
               return(
                  <span key={tag.name}>{tag.name.toUpperCase()}</span>
               )
            })}
         </div>

         <h1>{name}</h1>
         <h2>{description}</h2>

         <CoffeBuyingInfo>
            <h3>{value.toFixed(2)}</h3>

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