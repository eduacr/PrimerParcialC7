import React, { useState } from 'react'
import Estatus from './Components/Estatus';
import Posteos from './Components/Posteos';
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

const App = () => {
    const [total, setTotal] = useState(0)
    const meGusta = () => {
      setTotal(total + 1)
    }
   
  return (
    <div className="App">
      <Estatus total={total}/>
      <Posteos meGusta={meGusta}/>
    </div>
  );
}

export default App;