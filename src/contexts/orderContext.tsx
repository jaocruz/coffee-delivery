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

export interface NewDeliveryFormData{
   cep: number
   street: string
   number: number
   complement?: string
   neighborhood: string
   city: string
   uf: string
   paymentMethod: string
}

interface CoffeeOrderContextData{
   coffeeOrderList: CoffeeDataProps[]
   deliveryInfo: NewDeliveryFormData | null
   setDeliveryInfo: (info: NewDeliveryFormData) => void
   setCoffeeOrderList: React.Dispatch<React.SetStateAction<CoffeeDataProps[]>>
   handleAddNewCoffeeToOrder: (newCoffee: CoffeeDataProps) => void
   handleRemoveCoffeFromOrder: (coffeToRemove: CoffeeDataProps) => void
   updateTotalOrderPrice: (coffeeId: number, newQuantity: number) => void
}
 
export const CoffeeOrderContext = createContext({} as CoffeeOrderContextData)

interface CoffeeOrderProviderProps{
   children: ReactNode
}

export function CoffeeOrderContextProvider({ children }:CoffeeOrderProviderProps){
   const [deliveryInfo, setDeliveryInfo] = useState<NewDeliveryFormData | null>(null)
   
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

   function updateTotalOrderPrice(coffeeId: number, newQuantity: number){
      setCoffeeOrderList((prev) => prev.map((coffee) =>
         coffee.id === coffeeId ? {...coffee, quantity: newQuantity} : coffee
      ))
   }

   return(
      <CoffeeOrderContext.Provider
      value={{
         coffeeOrderList,
         deliveryInfo,
         setDeliveryInfo,
         setCoffeeOrderList,
         handleAddNewCoffeeToOrder,
         handleRemoveCoffeFromOrder,
         updateTotalOrderPrice
      }}>
         {children}
      </CoffeeOrderContext.Provider>
   )
}