 // import React from 'react'

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      console.log("data")
      try {
        const res = await fetch("/api/conversations/list", {
          method: "GET",
        });
        const data = await res.json();
        console.log(data)
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, conversations };
}

export default useGetConversations;
