import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import PortfolioLayout from "./layout/Portfolio";

function App() {
  // const { user, token } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
