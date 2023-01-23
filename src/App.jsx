import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPanel from "./components/main/MainPanel";
const App = () => {
  AOS.init({ once: true });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
