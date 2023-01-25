import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import LandingPage from "./pages/landing/LandingPage";
import TransactionPage from "./pages/transaction/TransactionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="transaction">
            <Route path="list" element={<TransactionPage />} />
            {/* <Route path="create" element={<CreateTransactionPage />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
