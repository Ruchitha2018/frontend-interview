import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)

  const fetchData = async() => {
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const data = await res.json();
    console.log(data)
    setProducts(data.products)
  }

  const selectPageHandler = (index) => {
    if(index >= 1 && index <= (products.length/10)) {
      setPage(index)
    }
    
  }

  useEffect(() => {
     fetchData();
  },[])

  return (
    <>
    <div className="products-listings">
      {products.slice(((page*10)-10),page*10).map((data, index) => {
        return (
          <>
          <div className="product-card">
            <img src={data.thumbnail} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
          </>
        )
      })}
    </div>
    <div className="products-pagination">
    <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? '' : 'pagination__disable'}>◀</span>
    {[...Array(products.length / 10)].map((_, i) => {
          return <span key={i}  className={`${i
            +1 === page ? 'active': ''}`} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
    })}
        <span className={page < (products.length/10) ? '' : 'pagination__disable'} onClick={() => selectPageHandler(page + 1)} >▶</span>

    </div>
    </>
  )
}

export default App
