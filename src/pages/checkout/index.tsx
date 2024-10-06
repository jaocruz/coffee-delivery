import { MapPinLine } from "phosphor-react";
import { CheckoutContainer, FormContainer, FormContent } from "./styles";

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
                  <input type="text" placeholder="CEP"/>

                  <input type="text" placeholder="Rua"/>

                  <div className="info-line01">
                     <input type="text" placeholder="Número"/>
                     <input type="text" placeholder="Complemento"/>
                  </div>

                  <div className="info-line02">
                     <input type="text" placeholder="Bairro"/>
                     <input type="text" placeholder="Cidade"/>
                     <input type="text" placeholder="UF"/>
                  </div>
               </FormContent>
            </FormContainer>
         </div>
      </CheckoutContainer>
   )
}