"use client";

import { useContext } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { AuthProviderContext } from "../context/AuthProvider";
import Header from "../components/Header";
import { auth } from "../lib/firebase/config";

const Layout = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(AuthProviderContext);

  // console.log('user', user);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="container mx-auto max-w-screen-sm border rounded h-screen overflow-auto">
      {user?.uid && <Header user={user} onSignOut={handleSignOut} />}
      <div className="h-[calc(100%-56px)]">{children}</div>
    </div>
  );
};

export default Layout;
