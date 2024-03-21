"use client";

import React from "react";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const ClientPage = async () => {
  const user = useCurrentUser();

  return (
    <div>
      <UserInfo user={user} label="📱 Client Component" />
    </div>
  );
};

export default ClientPage;
