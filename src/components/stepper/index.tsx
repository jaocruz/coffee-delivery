import { StepperContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

export function Stepper(){
   return(
      <StepperContainer>
         <Minus size={14}/>
            <h1>1</h1>
         <Plus size={14}/>
      </StepperContainer>
   )
}