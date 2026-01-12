import "./App.css";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>welcome to the app</h1>
      <SignedOut>
        <SignInButton  mood="model"/>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      
    </>
  )
}

export default App
