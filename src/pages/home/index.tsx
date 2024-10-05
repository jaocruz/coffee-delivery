import { CoffeList, HomeContainer, HomeIntro, SeparatedItem } from "./styles"

import mainPicture from "/main-picture.svg"

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

import { CoffeCard } from "./components/coffeCard"

export function Home(){
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
                  <Coffee weight="fill" className="coffe"/>
                  <span>O café chega fresquinho até você</span>
               </SeparatedItem>
            </div>

            <img src={mainPicture} alt="" />
         </HomeIntro>

         <CoffeList>
            <h1>Nossos cafés</h1>

            <div className="list">
               <CoffeCard/>
            </div>
         </CoffeList>
      </HomeContainer>
   )
}