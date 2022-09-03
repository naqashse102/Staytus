import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from "./components/header";
import NotFound from "./pages/404";
import Profile from "./pages/profile";
import PromiseComponent from "./pages/promise";
import State from "./pages/state";

function App() {
  return (
    <div className="App">
      <div className="min-h-full">
        <Header />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Profile />} />
          <Route path={`${process.env.PUBLIC_URL}/state`} element={<State />} />
          <Route path={`${process.env.PUBLIC_URL}/promise`} element={<PromiseComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
