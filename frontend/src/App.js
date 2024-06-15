import Home from "./pages/Home/Home/Home.jsx"
import Hotel from "./pages/Home/hotel/Hotel.jsx";
import List from "./pages/Home/list/List.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotels" element={<List/>}></Route>
        <Route path="/hotels/:id" element={<Hotel/>}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App;