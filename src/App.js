import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prob1 from './components/page/Prob1';
import Prob2 from './components/page/Prob2';
import Prob3 from './components/page/Prob3';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prob1 />} />
        <Route path="/p1" element={<Prob2 />} />
        <Route path="/p2" element={<Prob3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// {/* <Router>
//           <Navigation />
//           <Route path="/p1" component={Prob1} exact />
//           <Route path="/p2" component={Prob2} />
//         </Router> */}