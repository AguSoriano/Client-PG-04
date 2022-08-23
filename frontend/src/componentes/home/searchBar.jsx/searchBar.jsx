import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getNameProduct } from '../../../redux/actions/index';

function SearchBar() {

  const dispatch = useDispatch()
  const [name, setName] = useState("")

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
  }

   function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameProduct(name)).then(resp =>{
      if(resp.code && resp.code ==='ERR_BAD_REQUEST'){
         alert('There is not product with that name');
      }
    });
    setName("")
  }

  return (
    <div>
        <form>
      <input
      type = 'text'
      placeholder='Search...'
      onChange = {(e) => handleInputChange(e)}
      />
      <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
      </form>
      </div>
  )
};

export default SearchBar;