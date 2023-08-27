
import './App.css';
import Header from './MyComponents/Header';
import {Todos}  from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {TodoItem}  from './MyComponents/TodoItem';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let todos = [
    {
    sno:1,
    title:"Go to the market",
    desc:"You need to go to  the market to get this job done"

  },

  {
    sno: 2,
    title:"Go to the mall",
    desc:"You need to go to  the mall to get this job done"
    
  },

  {
    sno: 3,
    title:"Go to the school",
    desc:"You need to go to  the school to get this job done"
    
  }
]
  return (
    <>
    <Header title="My Todos List" />

    <Todos todos={todos}/>
    <Footer/>
    <TodoItem/>

  </>
  );
}

export default App;
