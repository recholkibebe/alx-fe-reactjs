import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	  const [count, setCount] = useState(0)

	  return (
		      <>
		        <div className="flex gap-4 justify-center my-6">
		          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
		            <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
		          </a>
		          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
		            <img src={reactLogo} className="w-16 h-16" alt="React logo" />
		          </a>
		        </div>
		        <h1 className="text-3xl font-bold text-center mb-6">Vite + React</h1>
		        <div className="card bg-gray-100 p-6 rounded-lg max-w-sm mx-auto shadow-lg text-center">
		          <button
		            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
		            onClick={() => setCount(count => count + 1)}
		          >
		            count is {count}
		          </button>
		          <p className="mt-4 text-gray-700">
		            Edit <code>src/App.jsx</code> and save to test HMR
		          </p>
		        </div>
		        <p className="text-center mt-8 text-gray-500">
		          Click on the Vite and React logos to learn more
		        </p>
		      </>
		    )
}

export default App

