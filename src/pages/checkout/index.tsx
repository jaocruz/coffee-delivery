import { BaseContainer, CheckoutContainer, CoffeeOrderContainer, ConfirmButton, FormContent } from "./styles";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { Input } from "./components/input";
import { PaymentButton } from "./components/paymentButton";
import { OrderCoffeeCard } from "./components/orderCoffeeCard";

import { NavLink } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { CoffeeOrderContext } from "../../contexts/orderContext";

import { useForm } from "react-hook-form"

export function Checkout(){
   const { coffeeOrderList, handleRemoveCoffeFromOrder } = useContext(CoffeeOrderContext)
   
   const [totalOrderPrice, setTotalOrderPrice] = useState(0)

   const deliveryPrice = 3.50

   const finalTotalPrice = totalOrderPrice + deliveryPrice

   const { register, handleSubmit, watch } = useForm()

   function handleCreateNewAddress(data: any){
      console.log(data)
   }

   const formInformations = watch([
      "cep", "street", "number", "complement", "neighborhood", "city", "uf"
   ])

   const isSubmitDisabled = !formInformations.every(formInformations => formInformations)

   useEffect(() => {
      const total = coffeeOrderList.reduce((total, coffee) => {
         return total + (coffee.value * coffee.quantity)
      }, 0)

      setTotalOrderPrice(total)
   }, [coffeeOrderList])

   return(
      <CheckoutContainer>
         <form onSubmit={handleSubmit(handleCreateNewAddress)} action="">
            <label>Complete seu pedido</label>

            <div className="finish-order">
               <BaseContainer>
                  <div className="form-header">
                     <MapPinLine size={22} className="address-icon"/>
                     <h1>Endereço de Entrega</h1>
                     <span>Informe o endereço onde deseja receber seu pedido</span>
                  </div>

                  <FormContent>
                     <Input
                     type="number"
                     placeholder="CEP"
                     {...register('cep')}
                     />

                     <Input
                     type="text"
                     placeholder="Rua"
                     {...register('street')}
                     />

                     <div className="info-line01">
                        <Input
                        type="number"
                        placeholder="Número"
                        {...register('number')}
                        />

                        <Input
                        type="text"
                        placeholder="Complemento"
                        {...register('complement')}
                        />
                     </div>

                     <div className="info-line02">
                        <Input
                        type="text"
                        placeholder="Bairro"
                        {...register('neighborhood')}
                        />

                        <Input
                        type="text"
                        placeholder="Cidade"
                        {...register('city')}
                        />

                        <Input
                        type="text"
                        placeholder="UF"
                        {...register('uf')}
                        />
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

               <NavLink to="/delivery" title="delivery">
                  <ConfirmButton type="submit" disabled={isSubmitDisabled}>
                     Confirmar pedido
                  </ConfirmButton>
               </NavLink>
            </CoffeeOrderContainer>
         </form>
      </CheckoutContainer>
   )
}