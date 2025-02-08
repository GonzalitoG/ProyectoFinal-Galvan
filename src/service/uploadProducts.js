import { db } from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Define los productos
export const products = [
  { id: 1, name: "Cafe Brasil", img: "categoria1.png", stock: 10, category: "brasil" },
  { id: 2, name: "Cafe Colombia", img: "categoria2.png", stock: 8, category: "colombia" },
  { id: 3, name: "Cafe Peru", img: "categoria3.png", stock: 5, category: "peru" },
];

// Función para subir productos a Firestore
export const uploadProducts = async () => {
  try {
    for (const product of products) {
      await addDoc(collection(db, "products"), product);
    }
    console.log("Productos subidos correctamente");
  } catch (error) {
    console.error("Error subiendo productos: ", error);
  }
};

// Llama a la función para subir productos (opcional)
uploadProducts();