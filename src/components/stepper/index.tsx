import { StepperContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

interface StepperProps{
   itemCounter: number
   setItemCounter: (count: number) => void
}

export function Stepper({ itemCounter, setItemCounter }: StepperProps){
   function handleIncrementQuantity(){
      if(itemCounter < 9){
         setItemCounter(itemCounter + 1)
      }
   }

   function handleDecrementQuantity(){
      if(itemCounter > 1){
         setItemCounter(itemCounter - 1)
      }
   }

   return(
      <StepperContainer>
         <Minus size={14} onClick={handleDecrementQuantity}/>
            <h4>{itemCounter}</h4>
         <Plus size={14} onClick={handleIncrementQuantity}/>
      </StepperContainer>
   )
}