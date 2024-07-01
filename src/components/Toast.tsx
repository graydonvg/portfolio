"use client";

import { useTheme } from "next-themes";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  const { resolvedTheme } = useTheme();

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      theme={resolvedTheme === "light" ? "colored" : "dark"}
      rtl={false}
      transition={Bounce}
    />
  );
}
