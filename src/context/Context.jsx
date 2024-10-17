import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const DataContext = createContext();

export const DataContextProvider = (props) => {
    const [cart , setCart] = useState([])
    const addToCart = (id, title, image, price, description) => {
        const obj = {
          id,
          title,
          image,
          price,
          description,
        };
        setCart([...cart, obj]);
        toast.success("Product add successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      };

      const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
      };
  

  return (
    <DataContext.Provider value={{ cart, setCart, addToCart , deleteItem }}>
      {props.children}
    </DataContext.Provider>
  );
};
