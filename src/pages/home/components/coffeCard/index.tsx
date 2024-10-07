import { ButtonCart, CoffeBuyingInfo, CoffeCardContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

import { Stepper } from "../../../../components/stepper";

interface Tag{
   name: string
}

interface CoffeProps{
   name: string
   tags: Tag[]
   description: string
   value: number
   photo: string
}

export function CoffeeCard({ name, tags, description, value, photo }: CoffeProps){
   return(
      <CoffeCardContainer>
         <img src={photo} alt="" />

         <div className="tags">
            {tags.map(tag => {
               return(
                  <span>{tag.name.toUpperCase()}</span>
               )
            })}
         </div>

         <h1>{name}</h1>
         <h2>{description}</h2>

         <CoffeBuyingInfo>
            <h3>{value.toFixed(2)}</h3>

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