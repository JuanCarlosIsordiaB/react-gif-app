import { useState } from 'react';


export const AddCategories = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = e => {
        setInputValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault(); //Para que no se haga refresh
        
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim())
        setInputValue('');
    }

  return (
    <form onSubmit={ (e) => onSubmitForm(e)}>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ (e) => onInputChange(e) }
        />
    </form>
  )
}
