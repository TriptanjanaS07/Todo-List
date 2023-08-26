import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos}  from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {TodoItem}  from './MyComponents/TodoItem';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <>
    <Header/>
    <Todos/>
    <Footer/>
    <TodoItem/>

  </>
  );
}

export default App;
