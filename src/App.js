import Header from './Header/Header';
import Introduce from './Main/Introduce/Introduce';
import Target from './Main/Target/Target';
import Products from './Main/Products/Products.jsx';
import Client from './Main/Clients/Clients';
import FooterMenu from './FooterMenu/FooterMenu';
import { useState, useEffect } from 'react';

const App = () => {
  const [toggle,setToggle] = useState(false);
  useEffect(()=>{
    if(toggle===true){
      document.body.style.overflowY = "hidden"
    }else{
      document.body.style.overflowY = "auto"
    }
  },[toggle])
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle}/>
      <Introduce />
      <Target />
      <Products />
      <Client />
      <FooterMenu toggle={toggle}/>
    </>
  );
}

export default App;
