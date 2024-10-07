import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { DeliveryContainer, OrderInfo } from "./styles";

import illustration from "/delivery-illustration.svg"

export function Delivery(){
   return(
      <DeliveryContainer>
         <div className="main-text">
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
         </div>

         <OrderInfo>
            <div className="item">
               <h1 className="map-delivery">
                  <MapPin weight="fill" size={16}/>
               </h1>

               <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong> </span>
               <span>Farrapos - Porto Alegre, RS</span>
            </div>

            <div className="item">
               <h1 className="timer-delivery">
                  <Timer weight="fill" size={16}/>
               </h1>

               <span>Previsão de entrega</span>
               <strong>20 min - 30 min</strong>
            </div>

            <div className="item">
               <h1 className="dollar-delivery">
                  <CurrencyDollar weight="fill" size={16}/>
               </h1>

               <span>Pagamento na entrega</span>
               <strong>Cartão de Crédito</strong>
            </div>
         </OrderInfo>
         
         <img src={illustration} alt="" />
      </DeliveryContainer>
   )
}