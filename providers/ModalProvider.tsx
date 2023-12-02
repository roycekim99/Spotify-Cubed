"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import SubscribeModal from "@/components/SubscribeModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // if useEffect() loads, it is a client.
  useEffect(() => {
    setIsMounted(true);
  });

  // never render if component is server side.
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal />
    </>
  );
};

export default ModalProvider;
