import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card/Card.jsx';

// export default function App() {
//   const [data, setData] = useState("");
//   const getData = async () => {
//     const resp = await fetch('https://api.sampleapis.com/wines/reds');
//     const json = await resp.json();
//     setData(json);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <section>
//       {JSON.stringify(data, null, 2)}
//     </section>
//   )
// }


function App(){
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const res = await fetch('https://api.sampleapis.com/wines/reds')
    const data = await res.json()
    setProducts(data)
  }

  const renderProduct = () => {
    return (
      <ul>
        {products.map(({ id, wine, winery, image }) => {
          return (
            <Card key={id} id={id} wine={wine} winery={winery} image={image} />
          )
        })}
      </ul>
    )
  }

  useEffect(() => {
    getProduct()
  },[])

return (
    <>
      {renderProduct()}
    </>
)
} 
  
export default App