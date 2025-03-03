import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useLogin(inputs) {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const doLogin = async () => {
    const success = inputErrorHandler(inputs);
    if (!success) return;
    setLoading(true);


    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
      }else{
        toast.error(data.error)
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, doLogin };
}

export default useLogin;

const inputErrorHandler = (inputs) => {
  const { username, password } = inputs;
  if (!username || !password) {
    toast.error("There are empty fields");
    return false;
  }
  if (password < 6) {
    toast.error("Password consist minimal 6 characters");
    return false;
  }
  return true;
};
