import { PaymentButtonContainer } from "./styles";

interface PaymentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
   icon: JSX.Element
   name: string
}

export function PaymentButton({icon, name, ...props}: PaymentButtonProps){
   return(
      <PaymentButtonContainer type="button" {...props}>
         {icon}
         <span>{name}</span>
      </PaymentButtonContainer>
   )
}