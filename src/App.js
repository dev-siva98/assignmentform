import "./App.css";
import Form from "./Components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./Components/Table/Table";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
