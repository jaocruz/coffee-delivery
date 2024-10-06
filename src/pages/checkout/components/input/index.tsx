import { InputContainer } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export function Input({...props}: InputProps){
   return(
      <InputContainer>
         <input type="text" {...props}/>
      </InputContainer>
   )
}