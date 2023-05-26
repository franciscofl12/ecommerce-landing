import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Header from './partials/Header';
import FeatureProduct from './partials/FeatureProduct';
import ProductList from './partials/Products';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Obtener los productos para guardarlos en una lista. "name": "Get products", POST

        const response = await axios.post('https://technical-frontend-api.bokokode.com/api/products');
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setProducts(responseData);
        } else if (typeof responseData == 'object') {
          // Convierto el objeto a un array.
          const productList = Object.values(responseData);
          setProducts(productList[0].data);
        }


        // Obtener el producto por ID. "name": "Get product by id", GET

        const productID = '62f21d08a65692271708e9b8';
        const productResponse = await axios.get(`https://technical-frontend-api.bokokode.com/api/products/${productID}`);
        const product = Object.values(productResponse.data);
        console.log('Producto: ', product[0]);

        // Obtener el producto por Filtración. "Get products with filters example (category and price)", POST

        const filterOptions = {
          sort: {
            key: 'price',
            type: 'ASC'
          },
          categories: ['cities']
        };

        const filteredResponse = await axios.post('https://technical-frontend-api.bokokode.com/api/products', filterOptions);
        const filteredProducts = Object.values(filteredResponse.data);
        console.log('Productos filtrados: ', filteredProducts[0].data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container mx-auto border px-12">
      <Header/>
      <FeatureProduct/>
      <ProductList/>
    </main>
  )
}

export default App;
