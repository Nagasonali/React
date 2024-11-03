import Navbar from "./components/Navbar"

const App = () => {
    const data={
        appname:"Sonali",
        logo:"by by"
    }
  return (
    <>
        <p className="text-red-500">Sonu</p>
        <Navbar para={data}/>
    </>
        
  )
}

export default App