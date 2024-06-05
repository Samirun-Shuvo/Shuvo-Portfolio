import { useState, useEffect } from "react";

export const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    const handleStorageChange = () => {
      const newToken = localStorage.getItem("token");
      setToken(newToken);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return token;
};
