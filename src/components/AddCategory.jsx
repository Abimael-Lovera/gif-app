import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value)
    // console.log(e.target.value)
  }

  const onSubmit=( event ) => {
    event.preventDefault();

    //validación para que tenga mínimo 5 caracteres
    if( inputValue.trim().length <= 5) return;

    // setCategories(categories => [...categories, inputValue]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }
  
  return (
    <form onSubmit={event =>onSubmit(event) }>
      <input 
        type="text"
        placeholder="Buscar Gif"
        value={ inputValue }
        onChange={ e => onInputChange(e) }
      />
      <button>Agregar categoria</button>
    </form>
  )
}
