import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Counter from './components/ItemCount';

const App = () => {
  
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Hola soy Item List Container'/>
      <Counter/>
    </div>
  );
}

export default App;
