import { createContext, ReactNode, useState } from "react"

interface Tag{
   name: string
}

export interface CoffeeDataProps{
   id: number
   tags: Tag[]
   name: string
   value: number
   photo: string
   quantity: number
   description: string
}

interface CoffeeOrderContextData{
   coffeeOrderList: CoffeeDataProps[]
   handleAddNewCoffeeToOrder: (newCoffee: CoffeeDataProps) => void
   handleRemoveCoffeFromOrder: (coffeToRemove: CoffeeDataProps) => void
}
 
export const CoffeeOrderContext = createContext({} as CoffeeOrderContextData)

interface CoffeeOrderProviderProps{
   children: ReactNode
}

export function CoffeeOrderContextProvider({ children }:CoffeeOrderProviderProps){
   const [coffeeOrderList, setCoffeeOrderList] = useState<CoffeeDataProps[]>([])

   function handleAddNewCoffeeToOrder(newCoffee: CoffeeDataProps){    
      setCoffeeOrderList(prevState => {
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

   function handleRemoveCoffeFromOrder(coffeeToRemove: CoffeeDataProps){
      setCoffeeOrderList(prevState => {
         return prevState.filter(coffee => coffee.id !== coffeeToRemove.id)
      })
   }

   console.log(coffeeOrderList)

   return(
      <CoffeeOrderContext.Provider
      value={{
         coffeeOrderList,
         handleAddNewCoffeeToOrder,
         handleRemoveCoffeFromOrder
      }}>
         {children}
      </CoffeeOrderContext.Provider>
   )
}