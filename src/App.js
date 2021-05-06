import Header from './Header/Header';
import Introduce from './Main/Introduce/Introduce';
import Target from './Main/Target/Target';
import Products from './Main/Products/Products.jsx';
import Client from './Main/Clients/Clients';
import FooterMenu from './Main/FooterMenu/FooterMenu';

const App = () => {
  return (
    <>
      <Header />
      <Introduce />
      <Target />
      <Products />
      <Client />
      <FooterMenu />
    </>
  );
}

export default App;
