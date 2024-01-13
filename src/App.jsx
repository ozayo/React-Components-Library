import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import Header from "./components/Header";
import AlertPage from "./pages/AlertPage";
import BadgePage from "./pages/BadgePage";
import CardPage from "./pages/CardPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/alerts" element={<AlertPage />} />
          <Route path="/badges" element={<BadgePage />} />
          <Route path="/cards" element={<CardPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
