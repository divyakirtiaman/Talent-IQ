
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      <h1>welcome to the app</h1>
      <SignedOut>
        <SignInButton  mood="model"/>
      </SignedOut>
      <button>LogIn</button>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      

    </>
  )
}

export default App
