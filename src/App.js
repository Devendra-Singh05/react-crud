import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./bodycontent.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Home from "./components/body/Home";
import Categories from "./components/body/Categories";
import Product from "./components/body/Product";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <section className="ms-0">
          <Sidebar></Sidebar>
          <div className="content">
            <Routes>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route
                path="/categories"
                element={<Categories></Categories>}
              ></Route>
              <Route path="/product" element={<Product></Product>}></Route>
            </Routes>
          </div>
        </section>
        <Footer></Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
