import { ButtonCart, CoffeBuyingInfo, CoffeCardContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

import { Stepper } from "../../../../components/stepper";

import { useState } from "react";

interface Tag{
   name: string
}

export interface CoffeProps{
   id: number
   name: string
   tags: Tag[]
   description: string
   value: number
   photo: string
   onAddNewCoffeToCart: (newCoffe: CoffeOrderProps) => void
}

export interface CoffeOrderProps{
   id: number
   name: string
   value: number
   photo: string
   quantity: number
}

export function CoffeeCard({ id, name, tags, description, value, photo, onAddNewCoffeToCart }: CoffeProps){
   const [quantity, setQuantity] = useState(1)

   function handleAddNewCoffeToCart(){
      onAddNewCoffeToCart({id, name, value, photo, quantity})
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
               quantity={quantity}
               setQuantity={setQuantity}
               />

               <ButtonCart onClick={handleAddNewCoffeToCart}>
                  <ShoppingCart weight="fill" size={22}/>
               </ButtonCart>
            </div>
         </CoffeBuyingInfo>
      </CoffeCardContainer>
   )
}