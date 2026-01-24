<<<<<<< HEAD

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
import "./App.css";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'
>>>>>>> bc6eac09e8608a27daa363df96b6f60afab6bb0f


import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'


function App() {
  return (
    <>
<<<<<<< HEAD

      
=======
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
>>>>>>> bc6eac09e8608a27daa363df96b6f60afab6bb0f
      <h1>welcome to the app</h1>
      <SignedOut>
        <SignInButton  mood="model"/>
      </SignedOut>
<<<<<<< HEAD
      <button>LogIn</button>
=======
>>>>>>> bc6eac09e8608a27daa363df96b6f60afab6bb0f

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      
<<<<<<< HEAD

=======
>>>>>>> bc6eac09e8608a27daa363df96b6f60afab6bb0f
    </>
  )
}

export default App
