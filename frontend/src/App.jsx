import Home from "@pages/Home";
import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./style";

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GlobalStyle>
    </div>
  );
}

export default App;
