
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import Viewdetails from './Pages/Viewdetails';
import { useState } from 'react';


function App(props) {
const [getCart,setGetCart] = useState([]);
// console.log(getCart)
 
const getArray=(ans)=>{


let yourobj = {
  ...ans,
  quantity:1
}


// method 1


// function checkItem(){
//   for(let i=0;i<getCart.length;i++){
//     if(getCart[i].id===ans.id){
//       return true
//     }

//   }
//   return false
// }
// let result=checkItem()
// // console.log(result)

// if(result===false){
//   setGetCart([...getCart,yourobj])
// }


// method 2

let find =getCart.find((x)=>x.id===ans.id)
if(!find){

  setGetCart([...getCart,yourobj])
}
else{
  alert("already exsists")
}
}
 
  return (
    <div className="App">
    <BrowserRouter>
  <div style={{marginBottom:"60px"}}> <Navbar getCart={getCart}/></div>
    <Routes>
    <Route path='/'element={<Home getArray={getArray}/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/signup'element={<Signup/>}/>
    <Route path='/cart'element={<Cart getCart={getCart} setGetCart={setGetCart}/>}/>
    <Route path='/Viewdetails'element={<Viewdetails getArray={getArray}/>}/>
   

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
