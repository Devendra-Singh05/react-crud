import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./bodycontent.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Categories from "./components/body/category/Index";
import Home from "./components/body/home/Index";
import Product from "./components/body/product/Index";
import Createcategory from "./components/body/category/Create";



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
              <Route path="/category/create" element={<Createcategory></Createcategory>}></Route>
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
