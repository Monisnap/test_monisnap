import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Classment from "./routes/Classment";
import Vote from "./routes/Vote";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="classment" element={<Classment />} />
        <Route path="vote" element={<Vote />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
