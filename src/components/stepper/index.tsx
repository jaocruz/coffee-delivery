import { StepperContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

interface StepperProps{
   quantity: number
   setQuantity: React.Dispatch<React.SetStateAction<number>>
}

export function Stepper({quantity, setQuantity}: StepperProps){
   function handleRemoveItemOnCart(){
      if(quantity > 1){
         setQuantity(prevState => prevState - 1)
      }
   }

   function handleAddNewItemOnCart(){
      if(quantity < 9){
         setQuantity(prevState => prevState + 1)
      }
   }

   return(
      <StepperContainer>
         <Minus size={14} onClick={handleRemoveItemOnCart}/>
            <h4>{quantity}</h4>
         <Plus size={14} onClick={handleAddNewItemOnCart}/>
      </StepperContainer>
   )
}