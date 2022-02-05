import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bucket from "./pages/BucketPage/Bucket";
import NotFound from "./pages/NotFoundPage/NotFound";
import ResortDetail from "./pages/ResortDetailsPage/ResortDetail";
import Resorts from "./pages/ResortsPage/Resorts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resorts />} />
        <Route path="/resorts/:ResortId" element={<ResortDetail/>} />
        <Route path="/bucket" element={<Bucket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
