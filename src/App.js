import Router from './router'
import { RouterProvider } from 'react-router-dom';
import './App.css';
import './asset/scss/main.scss'

function App() {
  return (
    <> 
      <RouterProvider router= {Router}/>
    </>
  );
}

export default App;
