import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  function toggleButton() {
    setIsLogged(true);
  }

  return (
    <>
    <div className="grid">
      <button  className= 'w-25 mt-4 mx-auto align-left  h-12 bg-blue-400 text-black rounded-lg cursor-pointer'onClick={() => { setIsLogged(!isLogged) }}>{isLogged ? ("Register") : ("Login")}</button>
      
      {isLogged ? (
        <Login isLogged={isLogged} setIsLogged={setIsLogged} />
      ) : (
        <Register isLogged={isLogged} setIsLogged={setIsLogged} />
        )}
        </div>
    </>
  );
}

export default App;
