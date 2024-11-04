import Header from "./component/Header";
import Hero from "./component/Hero";
import { data } from "./Data";

function App() {
  const articles = data.map((items,index) => {
    console.log(index,"This Current Index")
    console.log(data.length,"data length")
    if(data.length - 1 === index) {
      console.log(true)
    }
    
    return(
      <>
      <Hero
      key={items.id}
      {...items}
      />
      {data.length - 1 !== index &&<hr />}
      </>
    )
  })
  return (
    <>
    <Header/>
    <div className="mt-5 flex flex-col">
    {articles}
    </div>
    </>
  );
}

export default App;
