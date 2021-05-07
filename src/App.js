import Header from './Header/Header';
import Introduce from './Main/Introduce/Introduce';
import Target from './Main/Target/Target';
import Products from './Main/Products/Products.jsx';
import Client from './Main/Clients/Clients';
import FooterMenu from './FooterMenu/FooterMenu';
import { useState } from 'react';
import styled from '@emotion/styled';

const FakeFooter = styled.div`
  width:100vw;
  height:100vh;
  position:relative;
`

const App = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle}/>
      <Introduce />
      <Target />
      <Products />
      <Client />
      <FakeFooter/>
      <FooterMenu toggle={toggle}/>
    </>
  );
}

export default App;
