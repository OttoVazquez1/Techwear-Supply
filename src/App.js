import './App.css';
import 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
