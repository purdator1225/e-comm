import logo from "./logo.svg";
import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navbar/navbar.component";
import Checkout from "./routes/checkout/checkout.component";

import { useContext } from "react";
import { UserContext } from "./components/contexts/user.context";

//becomes a template header

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
