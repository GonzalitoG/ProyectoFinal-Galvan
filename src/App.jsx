import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUser } from "./context/UserContext";
import Categorias from "./component/Categorias";
import { Header } from "./component/Header";
import { Navbar } from "./component/Navbar";
import ItemCount from "./component/ItemCount";


function App() {
  // Función para manejar agregar al carrito
  const handleAddToCart = (quantity, productName) => {
    alert(`Has agregado ${quantity} de ${productName} al carrito`);
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Categorias onAddToCart={handleAddToCart} />}/>
        <Route path="/categorias/" element={<Categorias onAddToCart={handleAddToCart} />}/>
        <Route path="*" element={<h1>Error 404: Ruta no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
