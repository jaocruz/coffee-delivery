import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer, FormContainer, FormContent, PaymentButton, PaymentMethodContainer } from "./styles";
import { Input } from "./components";

export function Checkout(){
   return(
      <CheckoutContainer>
         <h1>Complete seu pedido</h1>

         <div className="finish-order">
            <FormContainer>
               <div className="form-header">
                  <MapPinLine size={22}/>
                  <h1>Endereço de Entrega</h1>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
               </div>

               <FormContent>
                  <Input placeholder="CEP"/>

                  <Input placeholder="Rua"/>

                  <div className="info-line01">
                     <Input placeholder="Número"/>
                     <Input placeholder="Complemento"/>
                  </div>

                  <div className="info-line02">
                     <Input placeholder="Bairro"/>
                     <Input placeholder="Cidade"/>
                     <Input placeholder="UF"/>
                  </div>
               </FormContent>
            </FormContainer>

            <PaymentMethodContainer>
               <div className="form-header">
                  <CurrencyDollar size={22}/>
                  <h1>Pagamento</h1>
                  <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
               </div>

               <div className="payment-buttons">
                  <PaymentButton>
                     <CreditCard />
                     <span>Cartão de crédito</span>
                  </PaymentButton>

                  <PaymentButton>
                     <Bank />
                     <span>Cartão de débito</span>
                  </PaymentButton>

                  <PaymentButton>
                     <Money />
                     <span>Dinheiro</span>
                  </PaymentButton>
               </div>
            </PaymentMethodContainer>
         </div>
      </CheckoutContainer>
   )
}