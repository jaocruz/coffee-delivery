import { StepperContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

export function Stepper(){
   return(
      <StepperContainer>
         <Minus size={14}/>
            <h4>1</h4>
         <Plus size={14}/>
      </StepperContainer>
   )
}