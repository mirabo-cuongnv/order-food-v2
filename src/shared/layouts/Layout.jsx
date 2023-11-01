"use client";

import { useContext } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { AuthProviderContext } from "../context/AuthProvider";
import Header from "../components/Header";
import { auth } from "../lib/firebase/config";
import Button from "../components/Button";
import axios from "axios";

const Layout = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(AuthProviderContext);

  // console.log('user', user);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const post = async () => {
    const a = await axios.post("/api/alert", {message: 'Com ve roi ca nha', title: 'Ra lay com thoi'});
    console.log(a);
  };

  return (
    <div className="container mx-auto max-w-screen-sm border rounded h-screen overflow-auto">
      <Button onClick={post} text="test alert" />
      {user?.uid && <Header user={user} onSignOut={handleSignOut} />}
      <div className="h-[calc(100%-56px)]">{children}</div>
    </div>
  );
};

export default Layout;
