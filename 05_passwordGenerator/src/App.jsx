import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str+= '0123456789'
    if(charAllowed) str+= "'!#$%&()*+,-./"
    for(let index = 1; index<=length;index++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='text-orange-500 font-mono font-extrabold w-full max-w-md
      mx-auto bg-gray-800 px-4 my-8 shadow-orange-500/50 rounded-lg p-4'>
        <h1 className='text-center text-white mb-3'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none px-3 py-1 w-full'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copyToClipBoard}
      className='bg-blue-500 p-1 text-white
       hover:bg-blue-900 duration-200
       active:bg-blue-500 '
      >copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
         type="range"
         min={6}
         max={100}
         value={length}
         className= "cursor-pointer"
         onChange={(e)=>{setLength(e.target.value)}} />
      </div>
      <label htmlFor="">Length: {length}</label>
      <div className='flex text-sm gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='numberInput'
        onChange={()=>{setNumberAllowed((prev)=> !prev)}} />
        <label htmlFor="">Numbers</label>
      </div>
      <div className='flex text-sm gap-x-1'>
        <input type="checkbox"
        defaultChecked= {charAllowed}
        id='charInput'
        onChange={()=>{setCharAllowed((prev)=>!prev)}} />
        <label htmlFor="">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
