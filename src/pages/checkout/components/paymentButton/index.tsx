import { PaymentButtonContainer } from "./styles";

interface PaymentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
   icon: JSX.Element
   name: string
   isActive: boolean
}

export function PaymentButton({icon, name, isActive, ...props}: PaymentButtonProps){
   return(
      <PaymentButtonContainer type="button" {...props} isActive={isActive}>
         {icon}
         <span>{name}</span>
      </PaymentButtonContainer>
   )
}