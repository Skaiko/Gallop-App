import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
