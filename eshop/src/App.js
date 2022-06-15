import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  const name = null;
  const isNameShowing = true;
  
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Hola soy Item List Container'/>
    </div>
  );
}

export default App;
