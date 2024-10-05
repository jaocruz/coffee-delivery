import { CoffeCard, CoffeList, HomeContainer, HomeIntro, SeparatedItem } from "./styles"

import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react"

import mainPicture from "/main-picture.svg"

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
               <CoffeCard>
                  <img src="./coffe-expresso.svg" alt="" />

                  <span>TRADICIONAL</span>
                  
                  <h1>Expresso Tradicional</h1>
                  <h2>O tradicional café feito com água quente e grãos moídos</h2>

                  <div className="coffe-infos">
                     <h3>9,90</h3>

                     <div className="buy-section">
                        <div className="stepper">
                           <Minus size={14}/>
                           <h1>1</h1>
                           <Plus size={14}/>
                        </div>

                        <button>
                           <ShoppingCart weight="fill" size={22}/>
                        </button>
                     </div>
                  </div>
               </CoffeCard>
            </div>
         </CoffeList>
      </HomeContainer>
   )
}