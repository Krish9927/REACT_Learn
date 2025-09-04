import { useState, useCallback ,useEffect ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charallow, setcharallow] = useState(false);
  const [password, setpassword] = useState("");
const Passwordref =useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charallow) str += "!@#$%^&*()~<>>?/;+{}[]";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numAllowed, charallow, setpassword]);
  const copypasswordtoclipboard= useCallback(()=>{
    Passwordref.current?.select();
    Passwordref.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password)
  },[password])
 useEffect(()=> {passwordGenerator()} ,[length,numAllowed,charallow,passwordGenerator])
  return (
    <>
      <div className="max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none flex-grow py-1 px-3"  
            placeholder="password"
            readOnly
            ref={Passwordref}
          />
          <button onClick={copypasswordtoclipboard}
           className="bg-blue-700 text-white -0 px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={100}
            className="cursor-pointer"
            onChange={(e) => {setlength(e.target.value)}} />
            <label>Length :{length}</label>

          </div>
          <div className="flex items-center gap-x-1 p-4">
            <input type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
               setnumAllowed((prev) => !prev);
            }
            } />
            <label htmlFor="numberInput">Numbers</label>
          </div>
           <div className="flex items-center gap-x-1 p-4">
            <input type="checkbox"
            defaultChecked={charallow}
            id="characterInput"
            onChange={()=>{
               setcharallow((prev) => !prev);
            }
            } />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
