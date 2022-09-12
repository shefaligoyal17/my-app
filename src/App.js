import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from "./components/form";
import { Map } from "./components/map";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Form />} />
          <Route path="/map" element={<Map />} />
          <Route
            render={() => <h1>The page you requested for doesn't exist.</h1>}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
