import React , {useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'



export const GiftExpertApp = () => {

   //const categories = ['One Punch' , 'Naruto' , 'Dragon Ball' , 'Samurai x']
   const [categories , setCategories] = useState(['One Punch' ])


  return (
    
    <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>
       
        <ol>
            {
                categories.map(category  =>  
                    <GifGrid
                     key = {category}
                     category = {category}/>
                     )
                
            }

        </ol>
    </>
    
  )
}



