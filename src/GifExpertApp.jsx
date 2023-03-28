
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  // Use new Set instead of using an array to avoid repetitive values
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ onAddCategory } 
        />
          { categories.map(element => 
            <GifGrid
              key={element}
              category={element}
            />
          )}
    </>
  )
}
