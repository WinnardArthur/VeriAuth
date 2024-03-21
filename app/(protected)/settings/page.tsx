"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();

  // Client sign out format
  // const onClick = () => {
  //   signOut();
  // };

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button onClick={onClick} type="submit">
        Sign Out
      </button>
    </div>
  );
};

export default SettingsPage;
