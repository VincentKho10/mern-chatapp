import { useEffect } from 'react'
import {useSocketContext} from '../context/SocketContext'
import useConversation from '../zustand/useConversation'

function useMessageListener() {
    const {messages, setMessages, selectedConvo, conversations, setConversations} = useConversation()
    const {socket} = useSocketContext()

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            if(selectedConvo._id == newMessage.conversationId){
                setMessages([...messages, newMessage.newmessage])
            }
            setConversations(conversations.map((v)=>{
                if(v._id == newMessage.conversationId){
                    v.messages.push(newMessage.newmessage)
                }
                return v
            }))
        })
        return ()=>socket?.off("newMessage")
    },[socket, setMessages, messages, conversations])
}

export default useMessageListener