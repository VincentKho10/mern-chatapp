// import React from 'react'

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

function LogoutButton() {
  const { loading, doLogout } = useLogout();

  const logoutHandle = async () => {
    await doLogout();
  };

  return loading ? (
    <span className="loading loading-spinner"></span>
  ) : (
    <div className="mt-auto">
      <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logoutHandle}
      />
    </div>
  );
}

export default LogoutButton;
