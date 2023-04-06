import './App.css';
import { Products } from "./components/product"
import { useProducts } from './hooks/newProducts';


function App() {
  const { data, loading, error } = useProducts()

  return (
    <>
      {loading && (<h1>Loading...</h1>)}
      {error && (<p>{error}</p>)}
      {data.map((item, index) => <Products key={index} product={item} />)}
    </>
  )
}

export default App;