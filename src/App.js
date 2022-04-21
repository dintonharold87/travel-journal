
import Navbar from './components/Navbar'
import Card from "./components/Card";
import Data from "./components/Data";

const dataElements= Data.map((item)=>{
  return(
    <Card 
    key="item.id"
    item={item}/>
    
  );
})
export default function App() {
  
  return (
    <>
      <Navbar />

      <section className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {dataElements}
      </section>
    </>
  );
}


