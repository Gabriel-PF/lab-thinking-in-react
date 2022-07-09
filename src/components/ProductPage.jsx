import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const search = (string) => {
    let searchResults;
    if (string === '') {
      setProducts(jsonData);
    }
    searchResults = products.filter((product) => {
      return product.name.toLowerCase().includes(string.toLowerCase());
    });
    setProducts(searchResults);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search}/>
      <ProductTable
        products={products}
      />
    </div>
  )
}

export default ProductsPage;