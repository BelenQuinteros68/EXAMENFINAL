import CatalogoBase from './catalogo';
import Header from './header';
import Footer from './footer';
function Principal() {
  return (
    <div className="App">
    <Header></Header>
    <div className="container">
    <CatalogoBase></CatalogoBase>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Principal; 