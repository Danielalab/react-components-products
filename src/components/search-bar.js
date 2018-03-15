import React from 'react';

const SearchBar = ({ text, checkbox, setTextInput, setProductsStock}) => (
  <form className = "form">
    <input type="text" placeholder="Search..." value={text} onChange={event => {
      setTextInput(event.target.value);
    }}/>
    <p>
    <input type="checkbox" checked={checkbox} onChange={event => {
      setProductsStock(event.target.checked);
    }}/>
    {' '}
    Only show products in stock
    </p>
  </form>
)

export default SearchBar