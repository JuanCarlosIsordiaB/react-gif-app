import {useState} from 'react';
import { AddCategories, GifGrid } from './components';



export const GifApp = () => {

    const [categories, setCategories] = useState([ '' ]);

    const onAddCategory = ( newCategory) => {
       //console.log(newCategory);
       if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>  

        <h1>GifApp</h1>

        <AddCategories 
            onNewCategory= {  onAddCategory }
        />

        
        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category} 
                    category={category} 
                />
            ))
        }
        
        {/* Gif */}
    </>
    
  )
}
