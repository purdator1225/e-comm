import logo from "./logo.svg";
import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import { Routes, Route, } from "react-router-dom";
import Navigation from "./routes/navbar/navbar.component";
import SignIn from "./routes/sign-in/sign-in.component";

//becomes a template header


function Shop() {
  return <h1> Hi this is Shop</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn/>} />

      </Route>
    </Routes>
  );
}

export default App;
