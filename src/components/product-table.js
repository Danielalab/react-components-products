import React from 'react';
import ProductCategoryRow from './product-category-row';
import ProductRow from './product-row';

const ProductTable = ({products}) => {
    //Esto es la propiedad products que es del tipo array
    // Seteando valores
    const rows = [];
    let lastCategory = null;
    //Creando la categoria 
    products.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    
    return (
      <table className = "table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

export default ProductTable