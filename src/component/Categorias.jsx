import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img1 from "../img/categoria1.png";
import img2 from "../img/categoria2.png";
import img3 from "../img/categoria3.png";
import ItemCount from "./ItemCount";

// Simula una API que obtiene los productos después de un retardo
const fetchProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Cafe Brasil", img: img1, stock: 10, category: "brasil" },
        { id: 2, name: "Cafe Colombia", img: img2, stock: 8, category: "colombia" },
        { id: 3, name: "Cafe Peru", img: img3, stock: 5, category: "peru" },
      ]);
    }, 1500);
  });

const Categorias = ({ onAddToCart }) => {
  const { category } = useParams(); // Lee la categoría desde la URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    fetchProducts().then((data) => {
      if (category) {
        setProducts(data.filter((product) => product.category === category));
      } else {
        setProducts(data);
      }
      setLoading(false);
    });
  }, [category]); 

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <section className="contenedor categorias">
      <h2 className="text-center">Cafe de Especialidad</h2>
      <div className="listado-categorias">
        {products.map((product) => (
          <div key={product.id} className="categoria-item">
            <img src={product.img} alt={`Imagen ${product.name}`} />
            <a href="#">{product.name}</a>
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={(quantity) => onAddToCart(quantity, product.name)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categorias;
