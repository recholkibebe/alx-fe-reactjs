export default function App() {
	  return (
		      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-blue-300">
		        {/* Header */}
		        <header className="bg-blue-600 text-white p-4 shadow-lg">
		          <h1 className="text-3xl font-bold text-center">Weather App Ìº§Ô∏è</h1>
		        </header>

		        {/* Main Content */}
		        <main className="flex-grow flex flex-col items-center justify-center p-6">
		          <p className="text-lg mb-6 text-gray-700">
		            Enter a city to check the weather:
		          </p>

		          {/* Search bar placeholder */}
		          <div className="flex w-full max-w-md">
		            <input
		              type="text"
		              placeholder="Search city..."
		              className="flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
		            />
		            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition">
		              Search
		            </button>
		          </div>
		        </main>

		        {/* Footer */}
		        <footer className="bg-gray-800 text-gray-200 p-4 text-center">
		          <p>&copy; {new Date().getFullYear()} Weather App</p>
		        </footer>
		      </div>
		    );
}

