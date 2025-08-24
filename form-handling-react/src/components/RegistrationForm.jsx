import { useState } from "react";

export default function RegistrationForm() {
	  const [username, setUsername] = useState("");
	  const [email, setEmail] = useState("");
	  const [password, setPassword] = useState("");
	  const [errors, setErrors] = useState({});

	  const handleSubmit = (e) => {
		      e.preventDefault();

		      const newErrors = {};
		      if (!username) newErrors.username = "Username is required";
		      if (!email) newErrors.email = "Email is required";
		      if (!password) newErrors.password = "Password is required";

		      setErrors(newErrors);

		      if (Object.keys(newErrors).length === 0) {
			            console.log("Form submitted:", { username, email, password });
			            alert("Form submitted successfully!");
			          }
		    };

	  return (
		      <form
		        onSubmit={handleSubmit}
		        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96"
		      >
		        <h2 className="text-2xl font-bold mb-4 text-center">
		          Registration Form
		        </h2>

		        <div className="mb-4">
		          <label className="block text-gray-700 text-sm mb-2">Username</label>
		          <input
		            type="text"
		            value={username}
		            onChange={(e) => setUsername(e.target.value)}
		            className="shadow border rounded w-full py-2 px-3 text-gray-700"
		          />
		          {errors.username && (
				            <p className="text-red-500 text-xs">{errors.username}</p>
				          )}
		        </div>

		        <div className="mb-4">
		          <label className="block text-gray-700 text-sm mb-2">Email</label>
		          <input
		            type="email"
		            value={email}
		            onChange={(e) => setEmail(e.target.value)}
		            className="shadow border rounded w-full py-2 px-3 text-gray-700"
		          />
		          {errors.email && (
				            <p className="text-red-500 text-xs">{errors.email}</p>
				          )}
		        </div>

		        <div className="mb-6">
		          <label className="block text-gray-700 text-sm mb-2">Password</label>
		          <input
		            type="password"
		            value={password}
		            onChange={(e) => setPassword(e.target.value)}
		            className="shadow border rounded w-full py-2 px-3 text-gray-700"
		          />
		          {errors.password && (
				            <p className="text-red-500 text-xs">{errors.password}</p>
				          )}
		        </div>

		        <button
		          type="submit"
		          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		        >
		          Register
		        </button>
		      </form>
		    );
}

