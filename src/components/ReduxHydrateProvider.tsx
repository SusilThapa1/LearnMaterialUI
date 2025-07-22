"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "../Redux/hooks/hooks";
import { loadUserFromStorage } from "../Redux/slices/auth/loginSlice";

const ReduxHydrateProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const parsed = JSON.parse(storedAuth);
      dispatch(loadUserFromStorage({ user: parsed.user, token: parsed.token }));
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default ReduxHydrateProvider;
