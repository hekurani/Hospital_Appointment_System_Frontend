import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
function App() {
  return (  
     <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
  
  );
}

export default App;