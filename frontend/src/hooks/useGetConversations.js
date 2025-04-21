 // import React from 'react'

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const {conversations, setConversations} = useConversation();
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/conversations/list", {
          method: "GET",
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        if(data != conversations){
          setConversations(data);
        }
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
