import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'devextreme/dist/css/dx.light.css';
//import Menu  from './layout/menu.js';
import Frame from './layout/frame/frame.js';
import Login from './page/sign/login/login.js';


function App() {
  return (
    //<Login />
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
