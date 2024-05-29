import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  return (
    <main>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Provider>
    </main>
  );
};

export default App;
