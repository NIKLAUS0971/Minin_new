import './App.css';
import { CrModal } from './components/createProduct';
import { Modal } from './components/modal';
import { Products } from "./components/product"
import { useProducts } from './hooks/newProducts';


function App() {
  const { data, loading, error } = useProducts()

  return (
    <>

      <div>
        {loading && (<h1>Loading...</h1>)}
        {error && (<p>{error}</p>)}
        {data.map((item, index) => <Products key={index} product={item} />)}


        <Modal title='Create new product'>
          <CrModal />
        </Modal>
      </div>
    </>
  )
}

export default App;