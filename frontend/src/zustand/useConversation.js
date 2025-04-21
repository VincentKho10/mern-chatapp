import { create } from 'zustand'

const useConversation = create((set)=>({
    selectedConvo: null,
    setSelectedConvo: (selectedConvo) => set({selectedConvo}),
    conversations: [],
    setConversations: (conversations)=>set({conversations}),
    messages: [],
    setMessages: (messages)=>set({messages})
}))

export default useConversation