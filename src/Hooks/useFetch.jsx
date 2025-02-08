import { useState, useEffect } from "react";
import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const useFetch = (nombreColeccion) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Referencia a la colección de productos
        const productsRef = collection(db, nombreColeccion); // configuracion y nombre de coleccion
        const snapshot = await getDocs(productsRef);

        // Mapear los documentos para obtener los datos
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(productsList);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar los productos:", err);
        setError("Hubo un problema al cargar los productos");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { data, loading, error };
};

export default useFetch;