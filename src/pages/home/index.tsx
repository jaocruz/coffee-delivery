import { CoffeeList, HomeContainer, HomeIntro, SeparatedItem } from "./styles"

import mainPicture from "/main-picture.svg"

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

import { CoffeeCard } from "./components/coffeeCard"

import { coffeeList } from "./components/coffeeList"

import { useState } from "react"

export interface CoffeeOnOrderProps{
   id: number
   name: string
   value: number
   photo: string
   quantity: number
}

export function Home(){
   const [coffeeOrder, setCoffeeOrder] = useState<CoffeeOnOrderProps[]>([])

   function handleAddNewCoffeeToOrder(newCoffee: CoffeeOnOrderProps){
      
      setCoffeeOrder(prevState => {
         const existingCoffeeOnOrder = prevState.findIndex(coffee => coffee.id === newCoffee.id)
         
         if(existingCoffeeOnOrder !== -1){
            const updatedCoffeeQuantity = {
               ...prevState[existingCoffeeOnOrder],
               quantity: prevState[existingCoffeeOnOrder].quantity + newCoffee.quantity
            }
   
            return [
               ...prevState.slice(0, existingCoffeeOnOrder),
               updatedCoffeeQuantity,
               ...prevState.slice(existingCoffeeOnOrder +1)
            ]
         }
   
         else{
            return [...prevState, newCoffee]
         }
      })
   }

   console.log(coffeeOrder)

   return(
      <HomeContainer>
         <HomeIntro>
            <div className="title">
               <h1>Encontre o café perfeito para qualquer hora do dia</h1>
               <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
            </div>

            <div className="items">
               <SeparatedItem>
                  <ShoppingCart weight="fill" className="cart"/>
                  <span>Compra simples e segura</span>
               </SeparatedItem>

               <SeparatedItem>
                  <Package weight="fill" className="package"/>
                  <span>Embalagem mantém o café intacto</span>
               </SeparatedItem>

               <SeparatedItem>
                  <Timer weight="fill" className="timer"/>
                  <span>Entrega rápida e rastreada</span>
               </SeparatedItem>

               <SeparatedItem>
                  <Coffee weight="fill" className="coffee"/>
                  <span>O café chega fresquinho até você</span>
               </SeparatedItem>
            </div>

            <img src={mainPicture} alt="" />
         </HomeIntro>

         <CoffeeList>
            <h1>Nossos cafés</h1>

            <div className="list">
               {coffeeList.map(cafe => {
                  return(
                     <CoffeeCard
                     key={cafe.id}
                     id={cafe.id}
                     name={cafe.name}
                     photo={cafe.photo}
                     tags={cafe.tags}
                     value={cafe.value}
                     description={cafe.description}
                     onAddNewCoffeeToOrder={handleAddNewCoffeeToOrder}
                     />
                  )
               })}
            </div>
         </CoffeeList>
      </HomeContainer>
   )
}