import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import BlogPost from "./BlogPost";

function App() {
	  return (
		      <BrowserRouter>
		        <nav>
		          <Link to="/">Home</Link> |{" "}
		          <Link to="/about">About</Link> |{" "}
		          <Link to="/profile">Profile</Link> |{" "}
		          <Link to="/blog/1">Blog 1</Link> |{" "}
		          <Link to="/blog/2">Blog 2</Link>
		        </nav>

		        <Routes>
		          <Route path="/" element={<Home />} />
		          <Route path="/about" element={<About />} />

		          {/* Nested Routes */}
		          <Route path="/profile" element={<Profile />}>
		            <Route path="details" element={<ProfileDetails />} />
		            <Route path="settings" element={<ProfileSettings />} />
		          </Route>

		          {/* Dynamic Route */}
		          <Route path="/blog/:id" element={<BlogPost />} />
		        </Routes>
		      </BrowserRouter>
		    );
}

export default App;

