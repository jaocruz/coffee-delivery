import React, { forwardRef } from "react";
import { InputContainer } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export const Input = forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {
   return (
      <InputContainer>
         <input ref={ref} {...props} />
      </InputContainer>
   )
})