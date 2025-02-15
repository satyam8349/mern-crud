import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./componets/Home";
import Display from "./componets/Display";
import Insert from "./componets/Insert";
import Search from "./componets/Search";
import Update from "./componets/Update";
import Edit from "./componets/Edit";



const App=()=>{
  return(
      <>
      
      
      

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="home"  element={<Home/>}/>
        <Route path="display"  element={<Display/>}/>
        <Route path="insert"  element={<Insert/>}/>
        <Route path="search"  element={<Search/>}/>
        <Route path="update"  element={<Update/>}/>
        <Route path="edit/:empid"  element={<Edit/>}/>



        </Route>
      </Routes>
      </BrowserRouter>
      </>
  )
  }
  
  export default App;