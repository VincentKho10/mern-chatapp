import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () =>{
    return (
        <div className="p-4 flex flex-col border-slate-500 border-r">
            <SearchInput />
            <div className="divider"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar