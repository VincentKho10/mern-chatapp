import { useState } from "react";
import toast from "react-hot-toast";

function useSignup(inputs) {
  const [loading, setLoading] = useState(false);

  const doSignup = async () => {
    const success = inputValidationHandler(inputs);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const json = await res.json()

      if(res.ok){
        window.location.href = '/login'
        toast.success("User Created Successfully");
      }else if(res.status >= 500){
        throw Error()
      }else{
        toast.error(json.error)
      }
    } catch (error) {
      toast.error("Fail to create")
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, doSignup };
}

export default useSignup;

function inputValidationHandler(inputs) {
  const { full_name, username, password, confirm_password, gender } = inputs;
  if (!full_name || !username || !password || !confirm_password || !gender) {
    toast.error("There are empty fields");
    return false;
  }
  if (confirm_password != password) {
    toast.error("Password and confirmation mismatch");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password length must longer than 6 characters");
    return false;
  }
  return true;
}
