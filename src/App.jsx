import './App.css'
import Products from './components/products/Products.jsx';
import Header from './components/header/Header.jsx';


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
  // const [products, setProducts] = useState([]);

  // const {filterProducts} = useContext(FiltersContext)

  // const [filters, setFilters] = useState({
  //   rating: 0
  //   winery: "all"
  // })


  // const getProduct = async () => {
  //   const res = await fetch('https://api.sampleapis.com/wines/reds')
  //   const data = await res.json()
  //   setProducts(data)
  // }

  // useEffect(() => {
  //   getProduct()
  // },[])

  // const filterProducts = (products) => {
  //   return(
  //     products.filter ( (products) => {
  //       return(
  //         products.rating >= filters.rating &&
  //         (
  //           filters.winery == "all" || 
  //           products.winery == filters.winery
  //         )
  //       )
  //     }
  //     )
  //   )
  // }

  // const filteredProducts = filterProducts(products)

return (
    <>
      <Header />
      <Products />
    </>
)
} 
  
export default App