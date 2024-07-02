import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      theme="dark"
      rtl={false}
      transition={Bounce}
    />
  );
}
