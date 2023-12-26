import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import Footer from './Components/Footer';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todoos")===null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todoos"));
  }

  const onDone = (todo) => {
    setTodoos(todoos.filter((e)=> {
      return e!==todo;
    }));
    localStorage.getItem("todoos", JSON.stringify(todoos));
  }

  const addTodo = (title, desc)=> {
    // console.log('I am adding this todo', title, desc);
    let sno;
    if(todoos.length===0){
      sno = 0;
    }
    else {
      sno = todoos[todoos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodoos([...todoos, myTodo]);
    // console.log(myTodo);
  }

  const [todoos, setTodoos] = useState(initTodo);

  useEffect(()=> {
    localStorage.setItem("todoos", JSON.stringify(todoos));
  }, [todoos]);

  return (
    <>
    <Router>
      <Header title="ToDoos" searchbar={false}/>
      <Routes>
          <Route exact path="/" element={<>
                <AddTodo addTodo={addTodo}/>
                <h3 className='text-center m-5'>To Doos List</h3>
                <Todos todoos={todoos} onDone={onDone}/>
              </>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
