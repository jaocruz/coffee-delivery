import { BaseContainer, CheckoutContainer, CoffeeOrderContainer, ConfirmButton, FormContent } from "./styles";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { Input } from "./components/input";
import { PaymentButton } from "./components/paymentButton";
import { OrderCoffeeCard } from "./components/orderCoffeeCard";

import { useContext, useEffect, useState } from "react";
import { CoffeeOrderContext } from "../../contexts/orderContext";

export function Checkout(){
   const { coffeeOrderList, handleRemoveCoffeFromOrder } = useContext(CoffeeOrderContext)
   
   const [totalOrderPrice, setTotalOrderPrice] = useState(0)

   const deliveryPrice = 3.50

   const finalTotalPrice = totalOrderPrice + deliveryPrice

   useEffect(() => {
      const total = coffeeOrderList.reduce((total, coffee) => {
         return total + (coffee.value * coffee.quantity)
      }, 0)

      setTotalOrderPrice(total)
   }, [coffeeOrderList])

   return(
      <CheckoutContainer>
         <form action="">
            <label>Complete seu pedido</label>

            <div className="finish-order">
               <BaseContainer>
                  <div className="form-header">
                     <MapPinLine size={22} className="address-icon"/>
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
               </BaseContainer>

               <BaseContainer>
                  <div className="form-header">
                     <CurrencyDollar size={22} className="payment-icon"/>
                     <h1>Pagamento</h1>
                     <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                  </div>

                  <div className="payment-buttons">
                     <PaymentButton
                     icon={<CreditCard />}
                     name="Cartão de crédito"
                     />

                     <PaymentButton
                     icon={<Bank />}
                     name="Cartão de débito"
                     />

                     <PaymentButton
                     icon={<Money />}
                     name="Dinheiro"
                     />
                  </div>
               </BaseContainer>
            </div>

            <label>Cafés selecionados</label>

            <CoffeeOrderContainer>
               <div className="coffeeCards">
                  {
                     coffeeOrderList?.map(cafe => {
                        return(
                           <div className="coffee-card-item" key={cafe.id}>
                              <OrderCoffeeCard
                              coffee={cafe}
                              onRemoveCoffeFroOrder={handleRemoveCoffeFromOrder}
                              />
                           </div>
                        )
                     })
                  }
               </div>

               <div className="coffeeInfo">
                  <div>
                     <span>Total de itens</span>
                     <span>R$ {totalOrderPrice.toFixed(2)}</span>
                  </div>

                  <div>
                     <span>Entrega</span>
                     <span>R$ {deliveryPrice.toFixed(2)}</span>
                  </div>

                  <div>
                     <strong>Total</strong>
                     <strong>R$ {finalTotalPrice.toFixed(2)}</strong>
                  </div>
               </div>

               <ConfirmButton type="button">
                  Confirmar pedido
               </ConfirmButton>
            </CoffeeOrderContainer>
         </form>
      </CheckoutContainer>
   )
}