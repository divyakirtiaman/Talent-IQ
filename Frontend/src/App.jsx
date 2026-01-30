
import { useState } from 'react'

import viteLogo from '/vite.svg'
import './index.css'


import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'
function App() {
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
