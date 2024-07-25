"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4 text-2xl">
      <div className="font-bold text-3xl">
        Welcome to Clerk, {user.firstName}!
      </div>
      <p className="text-center text-lg max-w-lg">
        We are excited to have you on board! Dive in and explore the wide range
        of features we offer. Should you have any questions or need assistance,
        our support team is here to ensure you have a seamless experience.
      </p>
    </div>
  );
};

export default ClientPage;
