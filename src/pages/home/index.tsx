import { CoffeList, HomeContainer, HomeIntro, SeparatedItem } from "./styles"

import mainPicture from "/main-picture.svg"

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

import { CoffeeCard } from "./components/coffeCard"

const coffeeList = [
   {
      id: 1,
      name: 'Expresso Tradicional',
      tags: [
         {name: 'tradicional'}
      ],
      description: 'O tradicional café feito com água quente e grãos moídos',
      value: 9.90,
      photo: '/coffe-expresso.svg'
   },

   {
      id: 2,
      name: 'Expresso Americano',
      tags: [
         {name: 'tradicional'}
      ],
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.90,
      photo: '/coffe-americano.svg'
   },

   {
      id: 3,
      name: 'Expresso Cremoso',
      tags: [
         {name: 'tradicional'}
      ],
      description: 'Café expresso tradicional com espuma cremosa',
      value: 9.90,
      photo: '/coffe-expresso-cremoso.svg'
   },

   {
      id: 4,
      name: 'Expresso Gelado',
      tags: [
         {name: 'tradicional'},
         {name: 'gelado'}
      ],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      value: 9.90,
      photo: '/coffe-cafe-gelado.svg'
   },

   {
      id: 5,
      name: 'Café com Leite',
      tags: [
         {name: 'tradicional'},
         {name: 'com leite'}
      ],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      value: 9.90,
      photo: '/coffe-cafe-com-leite.svg'
   },

   {
      id: 6,
      name: 'Lattee',
      tags: [
         {name: 'tradicional'},
         {name: 'com leite'}
      ],
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      value: 9.90,
      photo: '/coffe-latte.svg'
   },

   {
      id: 7,
      name: 'Capuccino',
      tags: [
         {name: 'tradicional'},
         {name: 'com leite'}
      ],
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      value: 9.90,
      photo: '/coffe-capuccino.svg'
   },
   {
      id: 8,
      name: 'Macchiato',
      tags: [
         {name: 'tradicional'},
         {name: 'com leite'}
      ],
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      value: 9.90,
      photo: '/coffe-macchiato.svg'
   },

   {
      id: 9,
      name: 'Mocaccinoe',
      tags: [
         {name: 'tradicional'},
         {name: 'com leite'}
      ],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      value: 9.90,
      photo: '/coffe-mocaccino.svg'
   },

   {
      id: 10,
      name: 'Chocolate Quente',
      tags: [
         {name: 'tradicional'},
         {name: 'com leite'}
      ],
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      value: 9.90,
      photo: '/coffe-chocolate-quente.svg'
   },

   {
      id: 11,
      name: 'Cubano',
      tags: [
         {name: 'especial'},
         {name: 'alcoólico'},
         {name: 'gelado'}
      ],
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      value: 9.90,
      photo: '/coffe-cubano.svg'
   },

   {
      id: 12,
      name: 'Havaiano',
      tags: [
         {name: 'especial'},
      ],
      description: 'Bebida adocicada preparada com café e leite de coco',
      value: 9.90,
      photo: '/coffe-havaiano.svg'
   },

   {
      id: 13,
      name: 'Árabe',
      tags: [
         {name: 'especial'},
      ],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      value: 9.90,
      photo: '/coffe-arabe.svg'
   },

   {
      id: 14,
      name: 'Irlandês',
      tags: [
         {name: 'especial'},
         {name: 'alcoólico'}
      ],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      value: 9.90,
      photo: '/coffe-irlandes.svg'
   }
]

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
               {coffeeList.map(cafe => {
                  return(
                     <CoffeeCard
                     key={cafe.id}
                     photo={cafe.photo}
                     tags={cafe.tags}
                     name={cafe.name}
                     description={cafe.description}
                     value={cafe.value}
                     />
                  )
               })}
            </div>
         </CoffeList>
      </HomeContainer>
   )
}