import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddDeveloper from "./components/AddDeveloper";
import DeveloperList from "./components/DeveloperList";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Login />}></Route>
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route path="/add-developer" element={<AddDeveloper />}></Route>
					<Route path="/developers" element={<DeveloperList />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
