import React from "react";
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';

const LoginButton = () => {
  const { user } = useUser()
  const router = useRouter()

  return <button className="loginButton" onClick={user ? () => router.push("/api/auth/logout") : () => router.push("/api/auth/login") }>{user ? "Log Out" : "Log in / Sign up"}</button>;
};

export default LoginButton;